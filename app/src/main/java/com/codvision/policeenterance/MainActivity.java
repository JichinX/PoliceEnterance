package com.codvision.policeenterance;

import android.os.Bundle;

import com.codvision.policeenterance.base.BaseWebActivity;

import static me.xujichang.web.WebConst.FLAG.WEB_URL;

public class MainActivity extends BaseWebActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        getIntent().putExtra(WEB_URL, "http://10.10.100.6:9987/company/html/App/index.html");
        super.onCreate(savedInstanceState);
        hideActionBar();
    }
}
