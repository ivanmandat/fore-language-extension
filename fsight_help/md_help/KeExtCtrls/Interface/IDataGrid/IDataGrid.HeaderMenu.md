# IDataGrid.HeaderMenu

IDataGrid.HeaderMenu
-


# IDataGrid.HeaderMenu


## Синтаксис


HeaderMenu: [IPopupMenu](ModForms.chm::/Interface/IPopupMenu/IPopupMenu.htm);


## Описание


Свойство HeaderMenu определяет
 контекстное меню, вызываемое в области заголовков контейнеров/столбцов
 компонента.


## Комментарии


В список допустимых значений входят все компоненты [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm),
 расположенные на форме.


По умолчанию данное свойство не установлено. При этом в заголовках будет
 вызываться системное контекстное меню. Описание системного меню представлено
 в описании компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm)
 в подразделе [Выбор
 столбцов](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm#choice_column).


Используя свойство [Menu](../IDataGridBandBase/IDataGridBandBase.Menu.htm)
 можно определить контекстное меню, которое будет вызвано для конкретного
 контейнера/столбца.


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
