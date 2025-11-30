# IRdsDictionaryBox.FindResultsMenu

IRdsDictionaryBox.FindResultsMenu
-


# IRdsDictionaryBox.FindResultsMenu


## Синтаксис


FindResultsMenu: Boolean;


## Описание


Свойство FindResultsMenu определяет,
 отображается ли в диалоге поиска контекстное меню для найденных элементов.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Контекстное меню отображается;


	- False. Контекстное меню
	 не отображается.


Для вызова диалога поиска элементов в компоненте [RdsDictionaryBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/RdsDictionaryBox.htm)
 нажмите сочетание клавиш CTRL+F.


## Пример


Для выполнения примера предполагается наличие формы, которая содержит:


	- кнопку с идентификатором «Button1»;


	- компонент RdsDictionaryBox
	 с идентификатором «RdsDictionaryBox1»;


	- компонент UiRdsDictionary,
	 являющийся источником данных для «RdsDictionaryBox1». В UiRdsDictionary
	 загружен какой-либо справочник НСИ.


Процедура является обработчиком события OnClick
 для кнопки «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    RdsDictionaryBox1.FindResultsMenu := False;

End Sub Button1OnClick;


После выполнения примера в диалоге поиска не будет отображаться
 контекстное меню для найденных элементов.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
