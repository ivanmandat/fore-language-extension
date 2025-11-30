# Подключение плагина к аналитической панели

Подключение плагина к аналитической панели
-


# Подключение плагина к аналитической панели


Для расширения возможностей построения [аналитической панели](UIAdhoc.chm::/UiAdhoc_Purpose.htm)
 доступно подключение [плагина](Plugins.htm).


Для подключения плагина к аналитической панели:


	- в веб-приложении и [конструкторе
	 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm):


		- Добавьте [файлы плагина](Create_Plugin.htm) <наименование плагина>.js
		 и <наименование плагина>.css
		 в папку установки веб-приложения или конструктора бизнес-приложений.


	Веб-приложение

	 Конструктор
	 бизнес-приложений

		Путь до папки установки веб-приложения:


			- если
			 описание плагина добавляется в конфигурационном файле [config.json](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#config_json):


				- в ОС Linux: /opt/foresight/fp10.x-webserver/r;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics
				 Platform 10.x Web Application\r;


			- если описание плагина добавляется
			 в конфигурационном файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm):


				- в ОС Linux: /opt/foresight/fp10.x-webserver;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Analytics
				 Platform 10.x Web Application.


		Путь до папки установки конструктора
		 бизнес-приложений:


			- если серверная часть конструктора бизнес-приложений
			 установлена автоматически на веб-сервер Apache2 или вручную на IIS:


				- в ОС Linux: /opt/foresight/fp10.x-dba;


				- в ОС Windows: C:\Program Files (x86)\Foresight\DBA_10.x. Папка
				 DBA_10.x
				 создаётся [вручную](Setup.chm::/Extensions/ASP_NET/Manual_Install_Designer_of_Business_Applications_ASP_NET.htm)
				 и может отличаться;


			- если серверная часть конструктора бизнес-приложений
			 установлена вручную на веб-сервер Apache2, Java или автоматически на
			 IIS:


				- в ОС Linux: /opt/foresight/dba/10.x;


				- в ОС Windows: C:\Program Files (x86)\Foresight\Designer
				 of Business Application 10.x Web Server.


Совет.
 Для удобного использования плагинов создайте отдельную папку custom_plugins,
 в которой будут размещаться плагины.


		- Добавьте описание плагина в конфигурационном файле [config.json](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#config_json)/[PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
		 для веб-приложения или [config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#config_json)/[DBA.config.json](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json)
		 для конструктора бизнес-приложений.


	config.json PP.xml  DBA.config.json

		В файле config.json [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules_config)/конструктора
		 бизнес-приложений для описания плагина используйте
		 поле plugins:


"modules": {
  "8448": { //числовое значение класса объекта «Аналитическая панель»
    "customization": { //пользовательские настройки оформления
      "plugins": [
        {
          "name": "Test", //наименование плагина
          "path": "./custom_plugins/Test.js", //относительный путь до JS-файла плагина
          "css": "./custom_plugins/Test.css", //относительный путь до CSS-файла со стилями плагина
          "id": "PP.Ui.Dashboard.Test", //идентификатор плагина, соответствующий типу экземпляра объекта
          "params": [ //параметры открытия плагина
            {
              "name": "APIKey",
              "value": "AIzaSyCT36DH2CuXQ8GHtNSZASvoxQtbidhuWCU"
            }
          ]
        },
        {
            ...
        }
      ]
    }
  }
}


		В файле PP.xml для описания плагина используйте раздел [<plugins>](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#plugins):


<plugins>
    <plugin type="PP.Ui.Dashboard.MyLabel" path="../custom_plugins/MyLabel.js" css="../custom_plugins/MyLabel.css" loaded="false" name="MyLabel"/>
    <plugin ... />
</plugins>


		В файле DBA.config.json для описания плагина используйте поле [plugins](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#plugins):


"plugins": [
    {
        "Type": "PP.Ui.Dashboard.MyLabel", //идентификатор плагина, соответствующий типу экземпляра объекта
        "Path": "../custom_plugins/MyLabel.js", //относительный путь до JS-файла плагина
        "Css": "../custom_plugins/MyLabel.css", //относительный путь до CSS-файла со стилями плагина
        "Name": "MyLabel", //наименование плагина
        "Loaded": false //способ загрузки плагина
    },
    {
        ...
    }
]


Важно.
 Для преднастроенных плагинов зарезервированы идентификаторы: PP.Ui.Dashboard.Sankey
 - «Sankey-диаграмма»; PP.Ui.Dashboard.Gantt
 - «Диаграмма Ганта»; PP.Ui.Dashboard.Indicator
 - «Индикатор». Убедитесь, что
 в конфигурационных файлах PP.xml и DBA.config.json атрибут type
 содержит идентификатор, отличный от зарезервированных.


В конфигурационном файле config.json [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules_config)/конструктора
 бизнес-приложений настройки плагинов объединяются,
 если атрибут id плагина совпадает
 с идентификатором преднастроенных плагинов.


		- Перезапустите серверную часть [веб-приложения](setup.chm::/UiWebSetup/03_Setup_Web/Web_Server_Restart.htm)/[конструктора
		 бизнес-приложений](setup.chm::/Extensions/Restart_Backend_Designer_of_Business_Applications.htm).


Также в веб-приложении помимо указанного
 способа можно подключить плагин через репозиторий.


[![](../opened.gif)![](../closed.gif)Подключение плагина через репозиторий,
 используя файл PP.xml](javascript:TextPopup(this))


	Для подключения плагина:


			- [Зарегистрируйте
			 плагин в сервисах](Connecting_Plugins_Dashboards.htm#registration).


			- Настройте аналитическую панель в веб-приложении. Для
			 отображения зарегистрированного плагина задайте свойство ServicesPlugins в файле
			 [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).
			 Внутри тега <pp> добавьте тег [<modules>](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules),
			 в котором задается свойство:


<modules>
    <dashboard>
        <reportBox ServicesPlugins="true"/>
    </dashboard>
</modules>


			- [Перезапустите
			 серверную часть веб-приложения](setup.chm::/UiWebSetup/03_Setup_Web/Web_Server_Restart.htm).


После выполнения действий при открытии аналитической
 панели в веб-приложении будет выполняться автономная регистрация плагина.
 Плагин будет доступен для вставки в аналитическую панель.


При разработке веб-приложения с помощью [DHTML-компонентов](dhtml.chm::/DHTML_components.htm)
 для подключения плагина через репозиторий используйте конструктор [KapBox](dhtmlAdhoc.chm::/Classes/Dashboard/Constructor_KapBox.htm)
 или метод [Kap.regPluginBlock](dhtmlAdhoc.chm::/Kap.regPluginBlock.htm),
 используемый в качестве отдельного способа подключения плагина;


	- в настольном приложении [зарегистрируйте
	 плагин в сервисах](Connecting_Plugins_Dashboards.htm#registration). После выполнения действия плагин будет зарегистрирован
	 в общих ресурсах и доступен для вставки в аналитическую панель.


Для вставки подключенного плагина выполните одно из действий в аналитической
 панели:


	- выполните команду, соответствующую названию плагина, в раскрывающемся
	 меню кнопки ![](b_plugin.gif) «Плагины»
	 на вкладке ленты «Главная»
	 или «Вставка»;


	- выполните команду, соответствующую названию плагина, в раскрывающемся
	 меню пункта «Новый блок > Плагины»
	 в контекстном меню аналитической панели.


После выполнения действий плагин будет вставлен в аналитическую панель
 отдельным объектом.


## Регистрация плагина в сервисах


Регистрация плагина осуществляется в среде разработки на языке программирования
 [Fore](Fore.chm::/Fore_Title.htm) с помощью
 свойства [ISharedPluginsContainer.Plugins](KeFore.chm::/Interface/ISharedPluginsContainer/ISharedPluginsContainer.Plugins.htm).


Для регистрации плагина в сервисах добавьте ссылки на системные сборки
 Metabase, Fore и выполните модуль:


	- для настольного приложения:


	Sub UserProc;

	Var

	    mb: IMetabase;

	    plugins: ISharedPlugins;

	    cont: ISharedPluginsContainer;

	    adhoc_plugs: ISharedAdhocPlugins;

	    plugin: ISharedAdhocPlugin;

	Begin

	    // Получим объект для работы с текущим репозиторием

	    mb := MetabaseClass.Active;

	    // Получим объект для работы с контейнером плагинов

	    cont := mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedPluginsContainer;

	    // Получим объект для работы с плагинами

	    plugins := cont.Plugins;

	    // Получим коллекцию плагинов инструмента "Аналитические панели"

	    adhoc_plugs := plugins.AdhocPlugins;

	    // Создадим новый плагин

	    plugin := plugins.AdhocPlugins.Add;

	    // Зададим идентификатор и наименование плагина

	    plugin.Id := "ID"; // Вместо "ID" укажите уникальный идентификатор плагина в верхнем регистре, совпадающий с идентификатором в структуре JS-скрипта плагина

	    plugin.Name := "name"; // Вместо "name" укажите имя плагина, которое будет отображаться в аналитической панели

	    // Зададим форму-визуализатор и форму-мастер

	    plugin.ViewForm := mb.ItemById("ViewForm_Id"); // Вместо "ViewForm_Id" укажите идентификатор формы-визуализатора

	    plugin.MasterForm := mb.ItemById("MasterForm_Id"); // Вместо "MasterForm_Id" укажите идентификатор формы-мастера

	    // Сохраним
	 созданный плагин

	    (cont As IMetabaseObject).Save;

	End Sub UserProc;


	- для веб-приложения:


	Sub UserProc;

	Var

	    mb: IMetabase;

	    plugins: ISharedPlugins;

	    cont: ISharedPluginsContainer;

	    adhoc_plugs: ISharedAdhocPlugins;

	    plugin: ISharedAdhocPlugin;

	Begin

	    // Получим объект для работы с текущим репозиторием

	    mb := MetabaseClass.Active;

	    // Получим объект для работы с контейнером плагинов

	    cont := mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedPluginsContainer;

	    // Получим объект для работы с плагинами

	    plugins := cont.Plugins;

	    // Получим коллекцию плагинов инструмента "Аналитические панели"

	    adhoc_plugs := plugins.AdhocPlugins;

	    // Создадим новый плагин

	    plugin := plugins.AdhocPlugins.Add;

	    // Зададим идентификатор и наименование плагина

	    plugin.Id := "ID"; // Вместо "ID" укажите уникальный идентификатор плагина в верхнем регистре, совпадающий с идентификатором в структуре JS-скрипта плагина

	    plugin.Name := "name"; // Вместо "name" укажите имя плагина, которое будет отображаться в аналитической панели

	    // Зададим относительный путь JS-скрипта

	    plugin.WebUrl := "url"; // Вместо "url" укажите относительный путь JS-скрипта из корневой папки веб-приложения

	    // Сохраним
	 созданный плагин

	    (cont As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения модуля плагин будет зарегистрирован в сервисах и доступен
 для вставки в аналитическую панель.


См. также:


[Плагины](Plugins.htm)
 | [Создание плагина](Create_Plugin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
