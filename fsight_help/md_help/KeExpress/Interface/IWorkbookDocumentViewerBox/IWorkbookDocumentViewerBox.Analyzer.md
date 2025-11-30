# IWorkbookDocumentViewerBox.Analyzer

IWorkbookDocumentViewerBox.Analyzer
-


# IWorkbookDocumentViewerBox.Analyzer


## Синтаксис


Analyzer: [IEaxAnalyzerSource](../IEaxAnalyzerSource/IEaxAnalyzerSource.htm);


## Описание


Свойство Analyzer определяет
 источник данных для компонента.


## Комментарии


В качестве источника данных необходимо указать компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 подключенный к необходимой рабочей книге репозитория.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkbookDocumentViewerBox
 с наименованием «WorkbookDocumentViewerBox1» и компонента UiErAnalyzer с
 наименованием «UiErAnalyzer1». «UiErAnalyzer1» подключен к какой-либо
 рабочей книге репозитория.


	Sub Button1OnClick1(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkbookDocumentViewerBox1.Analyzer := UiErAnalyzer1 As IEaxAnalyzerSource;

	    WorkbookDocumentViewerBox1.FactorsTreeVisible := False;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick1;


При нажатии на кнопку компонент «UiErAnalyzer1» будет установлен
 в качестве источника для «WorkbookDocumentViewerBox1». Отображение дерева
 рядов, кнопки «Источник» и цепочки
 навигации в компоненте будет отключено.


См. также:


[IWorkbookDocumentViewerBox](IWorkbookDocumentViewerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
