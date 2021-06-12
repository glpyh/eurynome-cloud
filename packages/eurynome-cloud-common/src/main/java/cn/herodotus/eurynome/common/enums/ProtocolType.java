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
 * Module Name: eurynome-cloud-common
 * File Name: ProtocolType.java
 * Author: gengwei.zheng
 * Date: 2021/06/13 04:05:13
 */

package cn.herodotus.eurynome.common.enums;

/**
 * <p>Description: Protocol枚举 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/6/13 4:05
 */
public enum ProtocolType {

    HTTP("http://", "http"),
    HTTPS("https://", "https");

    private final String format;
    private final String prefix;

    ProtocolType(String format, String prefix) {
        this.format = format;
        this.prefix = prefix;
    }

    public String getFormat() {
        return format;
    }

    public String getPrefix() {
        return prefix;
    }
}
