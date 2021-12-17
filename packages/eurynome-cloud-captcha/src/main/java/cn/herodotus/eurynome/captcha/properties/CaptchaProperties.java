/*
 * Copyright (c) 2019-2021 Gengwei Zheng (herodotus@aliyun.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-captcha
 * File Name: CaptchaProperties.java
 * Author: gengwei.zheng
 * Date: 2021/12/17 21:14:17
 */

package cn.herodotus.eurynome.captcha.properties;

import cn.herodotus.eurynome.assistant.constant.PropertyConstants;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * <p>Description: 验证码配置参数 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/12/17 21:14
 */
@ConfigurationProperties(prefix = PropertyConstants.PROPERTY_SECURITY_CAPTCHA)
public class CaptchaProperties {

    /**
     * 水印配置
     */
    private Watermark watermark = new Watermark();
    /**
     * 滑块拼图验证码配置
     */
    private Jigsaw jigsaw = new Jigsaw();
    /**
     * 文字点选验证码配置
     */
    private WordClick wordClick = new WordClick();

    public Watermark getWatermark() {
        return watermark;
    }

    public void setWatermark(Watermark watermark) {
        this.watermark = watermark;
    }

    public Jigsaw getJigsaw() {
        return jigsaw;
    }

    public void setJigsaw(Jigsaw jigsaw) {
        this.jigsaw = jigsaw;
    }

    public WordClick getWordClick() {
        return wordClick;
    }

    public void setWordClick(WordClick wordClick) {
        this.wordClick = wordClick;
    }

    /**
     * 右下角水印文字(我的水印)
     */
    public static class Watermark {
        /**
         * 字体路径，格式：classpath:/xxx
         */
        private String fontPath = "classpath*:/fonts";
        /**
         * 水印内容
         */
        private String content = "Eurynome Cloud";
        /**
         * 水印字体
         */
        private String fontName = "WenQuanZhengHei.ttf";
        /**
         * 字体样式： 0:PLAIN; 1:BOLD; 2:ITALI；
         */
        private Integer fontStyle = 1;

        /**
         * 水印文字中，汉字的大小，默认：25
         */
        private Integer fontSize = 25;

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        public String getFontName() {
            return fontName;
        }

        public void setFontName(String fontName) {
            this.fontName = fontName;
        }

        public Integer getFontSize() {
            return fontSize;
        }

        public void setFontSize(Integer fontSize) {
            this.fontSize = fontSize;
        }

        public String getFontPath() {
            return fontPath;
        }

        public void setFontPath(String fontPath) {
            this.fontPath = fontPath;
        }

        public Integer getFontStyle() {
            return fontStyle;
        }

        public void setFontStyle(Integer fontStyle) {
            this.fontStyle = fontStyle;
        }
    }

    /**
     * 拼图滑块验证码
     */
    public static class Jigsaw {
        /**
         * 拼图滑块验证码原图资源路径，格式：classpath:/xxx
         */
        private String originalResource = "classpath*:images/jigsaw/original/*.png";
        /**
         * 拼图滑块验证码拼图模版资源路径，格式：classpath:/xxx
         */
        private String templateResource = "classpath*:images/jigsaw/template/*.png";

        /**
         * 滑动干扰项, 可选值为(0/1/2), 默认值为：0，即无干扰项
         */
        private Integer interference = 0;

        /**
         * 偏差值，滑动结果与标准结果间可接受的偏差值。默认：5
         */
        private Integer deviation = 5;

        public String getOriginalResource() {
            return originalResource;
        }

        public void setOriginalResource(String originalResource) {
            this.originalResource = originalResource;
        }

        public String getTemplateResource() {
            return templateResource;
        }

        public void setTemplateResource(String templateResource) {
            this.templateResource = templateResource;
        }

        public Integer getInterference() {
            return interference;
        }

        public void setInterference(Integer interference) {
            this.interference = interference;
        }

        public Integer getDeviation() {
            return deviation;
        }

        public void setDeviation(Integer deviation) {
            this.deviation = deviation;
        }
    }

    /**
     * 文字点选验证码
     */
    public static class WordClick {

        /**
         * 文字点选验证码资源路径，格式：classpath:/xxx
         */
        private String imageResource = "classpath*:images/word-click/*.png";
        /**
         * 字体路径，格式：classpath:/xxx
         */
        private String fontPath = "classpath*:/fonts";
        /**
         * 文字点选验证码文字个数
         */
        private Integer wordCount = 5;
        /**
         * 随机颜色
         */
        private boolean randomColor = true;
        /**
         * 字体样式： 0:PLAIN; 1:BOLD; 2:ITALI；
         */
        private Integer fontStyle = 1;
        /**
         * 水印字体
         */
        private String fontName = "WenQuanZhengHei.ttf";
        /**
         * 文字点选验证码资源路径字体大小
         */
        private Integer fontSize = 25;

        public String getImageResource() {
            return imageResource;
        }

        public void setImageResource(String imageResource) {
            this.imageResource = imageResource;
        }

        public Integer getWordCount() {
            return wordCount;
        }

        public void setWordCount(Integer wordCount) {
            this.wordCount = wordCount;
        }

        public Integer getFontSize() {
            return fontSize;
        }

        public void setFontSize(Integer fontSize) {
            this.fontSize = fontSize;
        }

        public boolean isRandomColor() {
            return randomColor;
        }

        public void setRandomColor(boolean randomColor) {
            this.randomColor = randomColor;
        }

        public String getFontPath() {
            return fontPath;
        }

        public void setFontPath(String fontPath) {
            this.fontPath = fontPath;
        }

        public String getFontName() {
            return fontName;
        }

        public void setFontName(String fontName) {
            this.fontName = fontName;
        }

        public Integer getFontStyle() {
            return fontStyle;
        }

        public void setFontStyle(Integer fontStyle) {
            this.fontStyle = fontStyle;
        }
    }
}
