# IMetaAttributeParamItems.Add

IMetaAttributeParamItems.Add
-


# IMetaAttributeParamItems.Add


## Синтаксис


Add(Value: [IMetaAttributeParamItem](../IMetaAttributeParamItem/IMetaAttributeParamItem.htm));


## Параметры


Value. Параметр, который необходимо
 добавить в коллекцию.


## Описание


Метод Add добавляет указанный
 параметр в коллекцию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetaAttributesBreadcrumb
 с наименованием «MetaAttributesBreadcrumb1». Компонент «MetaAttributesBreadcrumb1»
 подключен к какой-либо базе данных временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Setting: IMetaAttributeSetting;

	    AttrParam: IMetaAttributeParamItem;

	Begin

	    Setting := MetaAttributesBreadcrumb1.MetaAttributeSettings.FindById("DL");

	    // Настройка параметра

	    AttrParam := New MetaAttributeParamItem.Create;

	    AttrParam.Id := "Param1";

	    AttrParam.Key := 1;

	    AttrParam.Name := "Период 1";

	    AttrParam.Tag := "День;Неделя";

	    AttrParam.Visible := True;

	    // Добавление параметра в коллекцию

	    Setting.MetaParamItemsCollection.Add(AttrParam);

	    // Настройка параметра

	    AttrParam := New MetaAttributeParamItem.Create;

	    AttrParam.Id := "Param2";

	    AttrParam.Key := 2;

	    AttrParam.Name := "Период 2";

	    AttrParam.Tag := "Месяц;Год";

	    AttrParam.Visible := True;

	    // Добавление параметра в коллекцию

	    Setting.MetaParamItemsCollection.Add(AttrParam);

	    // Установка первого параметра в качестве значения атрибута

	    Setting.SelectedParam := Setting.MetaParamItemsCollection.FindById("Param1");

	End Sub Button1OnClick;


При нажатии на кнопку для атрибута «Период» будут созданы два параметра.
 Первый параметр будет установлен в качестве значения атрибута.


См. также:


[IMetaAttributeParamItems](IMetaAttributeParamItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
