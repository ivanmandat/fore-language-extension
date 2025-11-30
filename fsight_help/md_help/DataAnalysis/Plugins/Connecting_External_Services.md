# Подключение внешних картографических сервисов к карте: Плагин

Подключение внешних картографических сервисов к карте: Плагин
-


# Подключение внешних картографических
 сервисов к карте


Для расширения возможностей отображения [карты](UiMaps.chm::/Map.htm) доступно подключение
 внешних картографических сервисов: Яндекс, Bing, ArcGis, OpenStreetMap,
 Google.


Примечание.
 Подключение внешних картографических сервисов к карте доступно в инструментах
 «[Аналитические панели](UIAdhoc.chm::/UiAdhoc_Purpose.htm)», «[Аналитические
 запросы (OLAP)](UIExpress.chm::/purpose/UiExpress_Purpose.htm)», «[Анализ
 временных рядов](UiDw.chm::/UiDw_Title.htm)» только в веб-приложении и
 [конструкторе
 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm).


Для подключения внешних картографических сервисов к карте:


	- Скачайте архив [MapPlugins.zip](MapPlugins.zip),
	 содержащий плагины для внешних картографических сервисов.


Важно.
 При подключении плагинов вы получаете доступ к API внешних картографических
 сервисов. Убедитесь, что вы обладаете правами на их использование. Компания
 «ФОРСАЙТ» не предоставляет вам никаких прав на использование внешних картографических
 сервисов и не несет ответственности за нарушение вами их политики лицензирования.


	- Извлеките плагины из архива и разместите их в соответствующей
	 папке установки веб-приложения или конструктора бизнес-приложений.


	Веб-приложение

	 Конструктор
	 бизнес-приложений

		Путь до папки в веб-приложении:


			- если
			 описание плагина добавляется в конфигурационном файле [config.json](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#config_json):


				- в ОС Linux: /opt/foresight/fp10.x-webserver/r/build.
				 Папка build создаётся вручную и может отличаться;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics
				 Platform 10.x Web Application\r\build. Папка build создаётся
				 вручную и может отличаться;


			- если описание плагина добавляется
			 в конфигурационном файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm):


				- в ОС Linux: /opt/foresight/fp10.x-webserver/build;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics
				 Platform 10.x Web Application\Build.


		Путь до папки в конструкторе бизнес-приложений:


			- если серверная часть конструктора бизнес-приложений
			 установлена автоматически на веб-сервер Apache2 или вручную
			 на IIS:


				- в ОС Linux: /opt/foresight/fp10.x-dba;


				- в ОС Windows: C:\Program Files (x86)\Foresight\DBA_10.x. Папка
				 DBA_10.x
				 создаётся [вручную](Setup.chm::/Extensions/ASP_NET/Manual_Install_Designer_of_Business_Applications_ASP_NET.htm)
				 и может отличаться;


			- если серверная часть конструктора бизнес-приложений
			 установлена вручную на веб-сервер Apache2, Java или автоматически
			 на IIS:


				- в ОС Linux: /opt/foresight/dba/10.x/assets/platform_modules/build;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Designer
				 of Business Application 10.x Web Server\assets\platform_modules\build.


	- Добавьте описание плагинов в конфигурационном файле [config.json](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#config_json)/[PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
	 для веб-приложения или [config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#config_json)/[DBA.config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json)
	 для конструктора бизнес-приложений.


При подключении плагинов для внешних картографических
 сервисов в конфигурационном файле config.json обязательно укажите описание
 плагина ExternalMapPlugin. Данный плагин является базовым классом для
 подключаемых плагинов.


	config.json PP.xml DBA.config.json

		В файле config.json [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules_config)/конструктора
		 бизнес-приложений для описания плагина используйте
		 поле plugins:


"modules": {
  "8448": { //числовое значение класса объекта «Аналитическая панель». Для объекта «Экспресс-отчёт» укажите значение класса «2561»
    "customization": { //пользовательские настройки оформления
      "plugins": [
          {
              "id": "PP.ExternalMapPlugin",
              "path": "./build/ExternalMapPlugin.js",
              "name": "ExternalMapPlugin"
          },
          {
              "id": "PP.Yandex",
              "path": "./build/YandexMapPlugin.js",
              "name": "YandexMapPlugin"
          },
          {
              "id": "PP.Bing",
              "path": "./build/BingMapPlugin.js",
              "name": "BingMapPlugin"
          },
          {
              "id": "PP.ArcGis",
              "path": "./build/ArcGisMapPlugin.js",
              "name": "ArcGisMapPlugin"
          },
          {
              "id": "PP.OpenStreetMap",
              "path": "./build/ArcGisMapPlugin.js",
              "name": "OpenStreetMapPlugin"
          },
          {
              "id": "PP.Google",
              "path": "./build/GoogleMapPlugin.js",
              "name": "GoogleMapPlugin",
              "params":[{
                  "name": "APIKey",
                  "value": "AIzaSyCT36DH2CuXQ8GHtNSZASvoxQtbidhuWCU"
              }]
          }
      ]
    }
  }
}


		В файле PP.xml для описания плагинов используйте раздел [<plugins>](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#plugins):


<plugins>
    <plugin name="ExternalMapPlugin" path="../build/ExternalMapPlugin.js" loaded="true"/>
    <plugin name="YandexMapPlugin" path="../build/YandexMapPlugin.js" type="PP.Yandex"/>
    <plugin name="BingMapPlugin" path="../build/BingMapPlugin.js" type="PP.Bing"/>
    <plugin name="ArcGisMapPlugin" path="../build/ArcGisMapPlugin.js" type="PP.ArcGis"/>
    <plugin name="OpenStreetMapPlugin" path="../build/ArcGisMapPlugin.js" type="PP.OpenStreetMap"/>
    <plugin name="GoogleMapPlugin" path="../build/GoogleMapPlugin.js" type="PP.Google">
        <params>
            <!-- Укажите ключ API при необходимости -->
            <param name="APIKey" value="AIzaSyCT36DH2CuXQ8GHtNSZASvoxQtbidhuWCU"/>
        </params>
    </plugin>
</plugins>


		В файле DBA.config.json для описания плагина используйте поле [plugins](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#plugins):


"plugins": [
    {
        "Type": "PP.Yandex",
        "Path": "../build/YandexMapPlugin.js",
        "Name": "YandexMapPlugin",
        "Loaded": true
    },
    {
        "Type": "PP.Bing",
        "Path": "../build/BingMapPlugin.js",
        "Name": "BingMapPlugin",
        "Loaded": true
    },
    {
        "Type": "PP.ArcGis",
        "Path": "../build/ArcGisMapPlugin.js",
        "Name": "ArcGisMapPlugin",
        "Loaded": true
    },
    {
        "Type": "PP.OpenStreetMap",
        "Path": "../build/ArcGisMapPlugin.js",
        "Name": "OpenStreetMapPlugin",
        "Loaded": true
    },
    {
        "Type": "PP.Google",
        "Path": "../build/GoogleMapPlugin.js",
        "Name": "GoogleMapPlugin",
        "Loaded": true,
        "Params":{
            "Param":[{
                "Name": "APIKey",
                "Value": "AIzaSyCT36DH2CuXQ8GHtNSZASvoxQtbidhuWCU"
            }]
        }
    }
]


	- Перезапустите серверную часть [веб-приложения](setup.chm::/UiWebSetup/03_Setup_Web/Web_Server_Restart.htm)/[конструктора
	 бизнес-приложений](setup.chm::/Extensions/Restart_Backend_Designer_of_Business_Applications.htm).


	- Откройте отчёт на редактирование и выберите один из доступных
	 картографических сервисов в раскрывающемся меню кнопки ![](b_externalServ.gif) «Внешние сервисы», расположенной
	 на вкладке «Карта» ленты
	 инструментов:


		- Yandex;


		- Bing;


		- ArcGis;


		- Open Street Maps;


		- Google.


Примечание.
 По умолчанию кнопка ![](b_externalServ.gif) «Внешние сервисы» скрыта.


После выполнения действий к карте будут подключены внешние картографические
 сервисы.


Важно. После
 подключения плагинов вы получаете доступ к API внешних картографических
 сервисов. Убедитесь, что вы обладаете правами на их использование. Компания
 «ФОРСАЙТ» не предоставляет вам никаких прав на использование внешних картографических
 сервисов и не несет ответственности за нарушение вами их политики лицензирования.


Пример карты с подключенным сервисом Google:


![](Bing_map.gif)


## Особенности использования внешних картографических сервисов


При использовании внешних картографических сервисов учитывайте следующие
 особенности:


	- используемая карта должна содержать [точки
	 привязки](Specifications.chm::/SVGMapSpecification/Structure/BaseElements/fs_Geo_element.htm) физических и географических координат;


	- накладываемые границы карт могут не совпадать. Решение проблем,
	 связанных с геопривязкой, приведено в статье «[Решение
	 проблем с геопривязкой при подключении внешних сервисов](Problems_geolocation.htm)».


См. также:


[Плагины](Plugins.htm)
 | [Дополнительные
 возможности карты](UiMaps.chm::/Configure/Advanced_Features.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
