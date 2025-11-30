# ITabFootnotesBox.Source

ITabFootnotesBox.Source
-


# ITabFootnotesBox.Source


## Синтаксис


Source: [ITabSheetSource](../ITabSheetSource/ITabSheetSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента.


## Комментарии


В качестве источника данных могут выступать следующие компоненты:


	- [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm);


	- [UiTabSheet](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiTabSheet.htm);


	- [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm).


## Пример


Для выполнения примера предполагается наличие формы, кнопки с наименованием
 «Button1», компонента TabFootnotesBox с наименованием «TabFootnotesBox1»
 и компонента UiErAnalyzer с наименованием «UiErAnalyzer1». К «UiErAnalyzer1»
 должен быть подключен экспресс-отчет с настроенными сносками.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TabFootnotesBox1.Source := UiErAnalyzer1 As ITabSheetSource;

End Sub Button1OnClick;


При нажатии на кнопку, для компонента «TabFootnotesBox1» в качестве
 источника данных будет установлен «UiErAnalyzer1». После этого в «TabFootnotesBox1»
 будут отображены сноски, созданные для экспресс-отчета.


См. также:


[ITabFootnotesBox](ITabFootnotesBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
