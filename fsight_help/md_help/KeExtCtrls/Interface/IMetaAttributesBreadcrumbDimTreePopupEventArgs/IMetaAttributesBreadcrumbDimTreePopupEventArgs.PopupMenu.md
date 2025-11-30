# IMetaAttributesBreadcrumbDimTreePopupEventArgs.PopupMenu

IMetaAttributesBreadcrumbDimTreePopupEventArgs.PopupMenu
-


# IMetaAttributesBreadcrumbDimTreePopupEventArgs.PopupMenu


## Синтаксис


PopupMenu: [IPopupMenu](ModForms.chm::/Interface/IPopupMenu/IPopupMenu.htm);


## Описание


Свойство PopupMenu определяет
 контекстное меню в раскрывающемся списке компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm).


## Комментарии


В качестве контекстного меню используйте компонент среды разработки
 [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm).


## Пример


Для выполнения примера в репозитории необходимо:


	- наличие формы, содержащей компоненты:


		- MetaAttributesBreadcrumb
		 с идентификатором «mab»;


		- PopupMenu с идентификатором
		 «pm». Для данного компонента вручную добавьте элементы меню;


	- базы данных временных рядов с идентификатором FC.


Добавьте ссылку на системную сборку Metabase.


	// Событие при открытии формы

	Sub POPUPMENUFormOnShow(Sender: Object; Args: IEventArgs);

	Begin

	    mab.Rubricator := MetabaseClass.Active.ItemById("FC").Open(Null) As IRubricatorInstance;

	    mab.ApplyDefaultAttributesOrder;

	End Sub POPUPMENUFormOnShow;


	// Событие при вызове контекстного меню в раскрывающемся списке компонента

	Sub mabOnDimTreePopup(Sender: Object; Args: IMetaAttributesBreadcrumbDimTreePopupEventArgs);

	Begin

	    Args.PopupMenu := pm;

	    Debug.WriteLine("Ключ справочника - " + Args.DimSelection.Dimension.Key.ToString);

	End Sub mabOnDimTreePopup;


После выполнения примера в компоненте MetaAttributesBreadcrumb в раскрывающемся
 списке при нажатии правой кнопки мыши:


	- будет показано указанное пользовательское контекстное меню;


	- в окно консоли будет выведен ключ справочника.


См. также:


[IMetaAttributesBreadcrumbDimTreePopupEventArgs](IMetaAttributesBreadcrumbDimTreePopupEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
