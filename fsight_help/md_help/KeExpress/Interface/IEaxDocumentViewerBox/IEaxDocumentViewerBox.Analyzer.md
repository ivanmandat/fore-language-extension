# IEaxDocumentViewerBox.Analyzer

IEaxDocumentViewerBox.Analyzer
-


# IEaxDocumentViewerBox.Analyzer


## Синтаксис


Analyzer: [IEaxAnalyzerSource](../IEaxAnalyzerSource/IEaxAnalyzerSource.htm);


## Описание


Свойство Analyzer определяет
 источник данных для компонента.


## Комментарии


В качестве источника данных необходимо указать компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 подключенный к необходимому экспресс-отчету репозитория.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxDocumentViewerBox
 с наименованием «EaxDocumentViewerBox1» и компонента UiErAnalyzer с
 наименованием «UiErAnalyzer1». «UiErAnalyzer1» подключен к какому-либо
 экспресс-отчету репозитория.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EaxDocumentViewerBox1.Analyzer := UiErAnalyzer1 As IEaxAnalyzerSource;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick;


При нажатии на кнопку компонент «UiErAnalyzer1» будет установлен
 в качестве источника для «EaxDocumentViewerBox1».


См. также:


[IEaxDocumentViewerBox](IEaxDocumentViewerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
