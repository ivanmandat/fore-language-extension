# ITreeList.ShowFindDialog

ITreeList.ShowFindDialog
-


# ITreeList.ShowFindDialog


## Синтаксис


ShowFindDialog;


## Описание


Метод ShowFindDialog инициализирует диалог поиска элементов компонента [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm).


## Пример


Для выполнения примера разместите на форме компоненты Button и TreeList
 с идентификаторами Button1 и TreeList1 соответственно.


Добавьте ссылки на системные сборки: ExtCtrls, Forms.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TreeList1.ShowFindDialog;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента TreeList1
 будет инициализирован диалог поиска элементов.


См. также:


[ITreeList](ITreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
