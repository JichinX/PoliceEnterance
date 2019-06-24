package com.codvision.webproject;

import android.os.Bundle;

import com.codvision.webproject.base.BaseWebActivity;

import static me.xujichang.web.WebConst.FLAG.WEB_URL;

public class MainActivity extends BaseWebActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        getIntent().putExtra(WEB_URL, BuildConfig.WEB_URL);
        super.onCreate(savedInstanceState);
        hideActionBar();
    }
}
