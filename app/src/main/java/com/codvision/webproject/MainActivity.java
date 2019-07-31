package com.codvision.webproject;

import android.os.Bundle;

import com.codvision.webproject.base.BaseWebActivity;


import static me.xujichang.web.WebConst.FLAG.WEB_URL;

public class MainActivity extends BaseWebActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        getIntent().putExtra(WEB_URL, generateUrl());
        super.onCreate(savedInstanceState);
        hideActionBar();
    }

    private String generateUrl() {
        String baseUrl = BuildConfig.BASE_URL;
        String webUrl = BuildConfig.WEB_URL;
        if (webUrl.startsWith("http")) {
            return webUrl;
        }
        return baseUrl + webUrl;
    }
}
