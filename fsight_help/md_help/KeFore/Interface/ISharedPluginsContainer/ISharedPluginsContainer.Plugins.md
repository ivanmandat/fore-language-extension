# ISharedPluginsContainer.Plugins

ISharedPluginsContainer.Plugins
-


# ISharedPluginsContainer.Plugins


## Синтаксис


Plugins: [ISharedPlugins](../ISharedPlugins/ISharedPlugins.htm);


## Описание


Свойство Plugins возвращает
 объект для работы с плагинами.


## Комментарии


Возвращаемый объект позволяет настроить общие параметры плагинов. Для
 настройки параметров конкретного плагина используйте интерфейс [ISharedAdhocPlugin](../ISharedAdhocPlugin/ISharedAdhocPlugin.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- Объекта «Ресурсы» с
	 идентификатором «RESOURCE».


	- Формы-визуализатора с идентификатором «OBJ_ViewForm». Данная
	 форма содержит компоненты, образующие внешний вид плагина, и код,
	 описывающий логику работы компонентов в плагине. Форма-визуализатор
	 должна наследоваться от класса [AdhocUserViewForm](KeAdhoc.chm::/Class/AdhocUserViewForm/AdhocUserViewForm.htm).


	- Формы-мастера с идентификатором «OBJ_MasterForm». Данная форма
	 содержит компоненты, образующие вкладки боковой панели для настройки
	 плагина, и код, описывающий логику применения настроек к плагину.
	 Форма-мастер должна наследоваться от класса [AdhocUserMasterForm](KeAdhoc.chm::/Class/AdhocUserMasterForm/AdhocUserMasterForm.htm).


В файловой системе должны существовать две пиктограммы: «C:\Icon_small.ico»
 размером 16х16 пикселей и «C:\Icon_large.ico»
 размером 32х32 пикселя. В папке «Build»,
 содержащейся в папке с установленным веб-приложением «Форсайт. Аналитическая платформа»,
 должен существовать скрипт «PP.SamplePlugin.js».
 Данный скрипт должен описывать аналог плагина, используемый в веб-приложении.


Добавьте ссылки на системные сборки: Drawing, Fore, Io, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    plugins: ISharedPlugins;

    cont: ISharedPluginsContainer;

    adhoc_plugs: ISharedAdhocPlugins;

    plugin: ISharedAdhocPlugin;

    Res: IResourceObject;

    ImgLst: IGxImageList;

    Icon: IGxIcon;

Begin

    // Получаем объект для работы с текущим репозиторием

    mb := MetabaseClass.Active;

    // Получаем объект для работы с контейнером плагинов

    cont := mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedPluginsContainer;

    // Получаем объект для работы с плагинами

    plugins := cont.Plugins;

    // Задаем объект «Ресурсы» для плагинов

    Res := mb.ItemById("RESOURCE").Edit As IResourceObject;

    plugins.Resource := Res;

    // Задаем маленькие изображения для плагинов

    ImgLst := New GxImageList.Create;

    ImgLst.Height := 16;

    ImgLst.Width := 16;

    Icon := New GxIcon.CreateFromFile("C:\Icon_small.ico");

    ImgLst.AddIcon(Icon);

    plugins.SmallImages := ImgLst;

    // Задаем большие изображения для плагинов

    ImgLst.Clear;

    ImgLst.Height := 32;

    ImgLst.Width := 32;

    Icon := New GxIcon.CreateFromFile("C:\Icon_large.ico");

    ImgLst.AddIcon(Icon);

    plugins.LargeImages := ImgLst;

    // Получаем коллекцию плагинов инструмента "Аналитические панели"

    adhoc_plugs := plugins.AdhocPlugins;

    // Создаем новый плагин

    plugin := plugins.AdhocPlugins.Add;

    // Задаем идентификатор
 в верхнем регистре, совпадающий с идентификатором в js-скрипте плагина

    plugin.Id := "SAMPLEPLUGIN";

    // Задаем наименование плагина

    plugin.Name := "Пример плагина";

    plugin.IconIndex := 0;

    // Задаем форму-визуализатор и форму-мастер

    plugin.ViewForm := mb.ItemById("OBJ_ViewForm");

    plugin.MasterForm := mb.ItemById("OBJ_MasterForm");

    // Задаем относительный
 путь плагина из корневой папки веб-приложения

    plugin.WebUrl := "../plugins/PP.SamplePlugin.js";

    // Сохраняем созданный плагин

    (cont As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в инструмент «Аналитические
 панели» будет подключен плагин.


См. также:


[ISharedPluginsContainer](ISharedPluginsContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
