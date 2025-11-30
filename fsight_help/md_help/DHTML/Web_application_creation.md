# Создание веб-приложения

Создание веб-приложения
-


# Создание веб-приложения


Для создания каркаса веб-приложения с использованием DHTML-компонентов:


	- Создайте веб-приложение (.NET FrameWork 4.5.2).


	- Создайте папку Config в корневой папке создаваемого приложения
	 и добавьте в неё файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm),
	 содержащий базовые настройки веб-приложения:


<?xml version="1.0" encoding="utf-8" ?>
<pp>
    <service url="http://Server[:Port][/VirtualCatalog]/axis2/services/PP.SOM.Som" />
    <metabase id="Repository" ping="120000" />
</pp>

Где:


		- Server. Наименование
		 или IP-адрес сервера, на котором функционирует [BI-сервер](Setup.chm::/UiWebSetup/UiWebSetup_TitlePage.htm);


		- Port. Номер порта,
		 через который будет осуществляться работа;


		- VirtualCatalog.
		 Виртуальный каталог BI-сервера, созданный инсталлятором. Указывается,
		 если BI-сервер установлен на веб-сервер IIS или в ОС Linux;


		- Repository. Идентификатор
		 репозитория по умолчанию, к которому будет выполняться подключение
		 при открытии веб-приложения.


	- Скопируйте содержимое из папок установленного веб-приложения,
	 расположенного в папке «S\Analytics Platform
	 10.x Web Application»,
	 где S - путь, по которому установлена серверная часть веб-приложения.


В таблице приведены необходимые папки с файлами
 для создаваемого приложения:


		 Папки
		 Описание


		 Bin
		 Скопируйте только библиотеку PP.dll.


		 Build
		 Скопируйте папку целиком. В папке содержатся сss-стили компонентов, js-файлы
		 и изображения во вложенной папке img.
		Примечание.
		 При размещении DHTML-компонента путь к папке с изображениями задается
		 в конструкторе с помощью свойства ImagePath
		 или для всего приложения с помощью статического свойства [PP.ImagePath](dhtmlCommon.chm::/Classes/PP/PP.ImagePath.htm).
		 Использование свойства приведено на странице «[Пример
		 размещения компонента ReportBox](dhtmlReport.chm::/Components/RegularReport/ReportBox/ReportBox_Example.htm)».


		 Resources
		 Скопируйте папку целиком. В папке содержатся ресурсы, используемые
		 для переводов DHTML-компонентов на другие языки.


Важно.
 Использование кода продукта «Форсайт. Аналитическая платформа»
 в опубликованных приложениях допускается только в скомпилированном и обфусцированном
 виде. Использование кода без обфускации приводит к открытию исходных кодов
 системного ПО, содержащих ноу-хау и являющихся защищаемой интеллектуальной
 собственностью компании.


	- Замените файл Web.config, расположенный в корневой папке создаваемого
	 приложения, на файл Web.config, расположенный в папке установленного
	 веб-приложения Analytics Platform
	 10.x Web Application,
	 или пропишите в файле Web.config следующие настройки:


<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.web>
        <globalization culture="auto" uiCulture="auto" responseEncoding="utf-8" responseHeaderEncoding="utf-8"/>
        <httpHandlers>
            <add verb="GET,POST" path="PPService.axd" type="PP.ServiceHandler, PP"/>
        </httpHandlers>
        <httpModules>
            <add name="PPModule" type="PP.PPModule, PP"/>
        </httpModules>
        <compilation debug="true"/>
        <httpRuntime maxRequestLength="102400"/>
    </system.web>
    <system.webServer>
        <directoryBrowse enabled="true"/>
        <handlers>
            <add preCondition="integratedMode" name="ppService" verb="GET,POST" path="PPService.axd" type="PP.ServiceHandler, PP"/>
        </handlers>
        <modules>
            <add name="PPModule" type="PP.PPModule, PP"/>
        </modules>
        <validation validateIntegratedModeConfiguration="false"/>
        <httpErrors errorMode="Detailed" />
        <staticContent>
            <mimeMap fileExtension=".trsp" mimeType="application/x-trsp"/>
        </staticContent>
    </system.webServer>
    <system.net>
        <connectionManagement>
            <add address="*" maxconnection="100"/>
        </connectionManagement>
    </system.net>
</configuration>

См. также:


[DHTML-компоненты](DHTML_components.htm)
 | [Размещение DHTML-компонентов](DHTML_components_layout.htm)
 | [Библиотека классов](Classes/Classes_library.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
