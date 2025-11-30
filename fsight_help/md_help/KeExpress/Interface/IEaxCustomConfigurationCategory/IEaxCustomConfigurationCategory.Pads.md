# IEaxCustomConfigurationCategory.Pads

IEaxCustomConfigurationCategory.Pads
-


# IEaxCustomConfigurationCategory.Pads


## Синтаксис


Pads: [IEaxConfigurationPads](../IEaxConfigurationPads/IEaxConfigurationPads.htm);


## Описание


Свойство Pads возвращает коллекцию
 вкладок боковой панели.


## Пример


Для выполнения примера на форме необходимо наличие компонента [EaxConfigurationPanel](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxConfigurationPanel.htm)
 с наименованием «EaxConfigurationPanel1» и компонента [UiErAnalyzer](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm) с наименованием
 «UiErAnalyzer1», указанного в качестве источника для [EaxConfigurationPanel](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxConfigurationPanel.htm).
 В репозитории должна быть создана форма с идентификатором PARAMS.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Cats: IEaxConfigurationCategories;

	    Cat: IEaxCustomConfigurationCategory;

	    C_Pads: IEaxConfigurationPads;

	    C_Pad: IEaxConfigurationPad;

	    Pad_Header: IEaxConfigurationPadHeader;

	Begin

	    Cats := EaxConfigurationPanel1.Categories;

	    //Группа вкладок

	    Cat := New EaxCustomConfigurationCategory.Create; // создаем новую группу вкладок

	    Cat.Caption := "Дополнительно";

	    Cats.AddCustom(Cat);

	    C_Pads := Cat.Pads;

	    //Вкладка

	    C_Pad := New EaxConfigurationPad.Create; // создаем новую вкладку

	    Pad_Header := C_Pad.Header;

	    Pad_Header.Content := EaxConfigurationPadHeaderContent.CheckBox;

	    Pad_Header.Value := False;

	    C_Pad.Header.Title := "Параметры";

	    C_Pad.Content.MetabaseObject := "PARAMS";

	    C_Pads.Add(C_Pad);

	End Sub Button1OnClick;


После выполнения примера на компоненте будут отображены группы вкладок
 с учетом настроек экспресс-отчета, указанного в качестве источника для
 UiErAnalyzer1. Будет добавлена группа с наименованием «Дополнительно»,
 содержащая вкладку с наименованием «Параметры». Панель вкладки будет
 содержать группу элементов реализованных в форме PARAMS.


См. также:


[IEaxCustomConfigurationCategory](IEaxCustomConfigurationCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
