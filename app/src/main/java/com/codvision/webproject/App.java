package com.codvision.webproject;

import android.support.multidex.MultiDexApplication;

import com.codvision.webproject.base.Const;

import me.xujichang.basic.util.InitUtil;

/**
 * Des:PoliceEnterance - com.codvision.policeenterance
 *
 * @author xujichang
 * @date 2019-03-27 - 19:49
 * <p>
 * modify:
 */
public class App extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        InitUtil.initModulesSpeed(Const.Modules, this);
        InitUtil.initModulesLow(Const.Modules, this);
    }
}
