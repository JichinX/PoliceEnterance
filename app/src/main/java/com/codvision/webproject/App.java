package com.codvision.webproject;

import android.content.Context;
import android.location.Location;
import android.location.LocationManager;
import android.support.multidex.MultiDexApplication;
import android.util.Log;

import com.codvision.check.CheckInit;
import com.codvision.webproject.base.Const;

import me.xujichang.basic.BaseInit;
import me.xujichang.basic.services.Task;
import me.xujichang.basic.services.TaskCenter;
import me.xujichang.basic.util.InitUtil;
import me.xujichang.util.tool.LocationTool;

/**
 * Des:PoliceEnterance - com.codvision.policeenterance
 *
 * @author xujichang
 * @date 2019-03-27 - 19:49
 * <p>
 * modify:
 */
public class App extends MultiDexApplication {
    private static final String TAG = "Application";
    private Location mLocation = new Location(LocationManager.GPS_PROVIDER);

    @Override
    public void onCreate() {
        super.onCreate();
        InitUtil.initModulesSpeed(Const.Modules, this);
        mLocation.reset();
        CheckInit.ENABLE_UPLOAD_LOCATION = false;
        CheckInit.location = mLocation;
        BaseInit.enablePacketService = true;
        initLocationTask();
        InitUtil.initModulesLow(Const.Modules, this);
    }

    private void initLocationTask() {
        Task locationTask = new Task();
        locationTask.setRunnable(new Runnable() {
            @Override
            public void run() {
                CheckInit.location.set(mLocation);
            }
        });
        generateLocation();
        TaskCenter.push(locationTask);
    }

    private void generateLocation() {
        LocationTool locationUtils = LocationTool.getInstance();
        locationUtils.startGetLocation(getApplicationContext(), new LocationTool.SimpleLocalizationListener() {
            @Override
            public void onGpsLocation(android.location.Location location) {
                if (null == location) {
                    return;
                }
                mLocation.set(location);
                Log.d("111", "onGpsLocation " + location.getLongitude() + "," + location.getLatitude());

            }
        });
    }
}
