# IErAnalyzerTitle.StartEdit

IErAnalyzerTitle.StartEdit
-


# IErAnalyzerTitle.StartEdit


## Синтаксис


StartEdit;


## Описание


Метод StartEdit переводит заголовок
 в режим редактирования.


## Комментарии


После вызова метода StartEdit
 и до вызова метода [IErAnalyzerTitle.EndEdit](IErAnalyzerTitle.EndEdit.htm)
 в заголовке будет возможность изменить текст с помощью различных специализированных
 методов компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ErAnalyzerTitle с наименованием
 «ErAnalyzerTitle1» и какого-либо компонента UiErAnalyzer, являющегося
 источником данных для «ErAnalyzerTitle1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    ErAnalyzerTitle1.StartEdit;

	    ErAnalyzerTitle1.InsertText("Тестовый отчет");

	    ErAnalyzerTitle1.EndEdit;

	End Sub Button1OnClick;


При нажатии на кнопку будет изменен текст заголовка. В текст будет вставлена
 указанная надпись.


См. также:


[IErAnalyzerTitle](IErAnalyzerTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
