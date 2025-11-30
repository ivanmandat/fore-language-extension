# ILanerBox.Object

ILanerBox.Object
-


# ILanerBox.Object


## Синтаксис


Object: [IUiErAnalyzer](../IUiErAnalyzer/IUiErAnalyzer.htm);


## Описание


Свойство Object определяет объект,
 являющийся источником данных компонента.


## Комментарии


Источником данных LanerBox является
 компонент среды разработки - [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента LanerResultsBox
 с наименованием «LanerResultsBox1» и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1». В «UiErAnalyzer1» должна быть загружена рабочая книга
 базы данных временных рядов.


Описанная процедура должна быть назначена обработчиком события OnCreate
 для формы.


	Sub LanerBoxFormOnCreate(Sender: Object; Args: IEventArgs);

	Begin

	    LanerBox1.Object := UiErAnalyzer1;

	    LanerResultsBox1.Object := UiErAnalyzer1;

	    UiErAnalyzer1.Active := True;

	End Sub LanerBoxFormOnCreate;


При создании формы источником данных для «LanerBox1» и «LanerResultsBox1»
 будет назначен компонент «UiErAnalyzer1».


См. также:


[ILanerBox](ILanerBox.htm)
 | [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
