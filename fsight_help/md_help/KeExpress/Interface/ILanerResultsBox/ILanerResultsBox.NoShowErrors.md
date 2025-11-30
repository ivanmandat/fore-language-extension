# ILanerResultsBox.NoShowErrors

ILanerResultsBox.NoShowErrors
-


# ILanerResultsBox.NoShowErrors


## Синтаксис


NoShowErrors: Boolean;


## Описание


Свойство NoShowErrors определяет,
 будет ли скрыта информация об ошибках.


## Комментарии


Для определения, будет ли отображена указанная панель, используйте свойство
 [ILanerResultsBox.ContainerVisible](ILanerResultsBox.ContainerVisible.htm).


Допустимые значения:


	- True. Информация об
	 ошибках будет скрыта;


	- False. Информация об
	 ошибках не будет скрыта.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 LanerBox с наименованием «LanerBox1», компонент LanerResultsBox с наименованием
 «LanerResultsBox1», компонент UiErAnalyzer с наименованием «UiErAnalyzer1».
 Укажите «UiErAnalyzer1» в качестве источника данных для компонентов «LanerBox1»
 и «LanerResultsBox1».


Пример является обработчиком события OnShow для формы.


	Sub OBJ7415FormOnShow(Sender: Object; Args: IEventArgs);

	Begin

	    LanerResultsBox1.NoShowErrors := True;

	End Sub OBJ7415FormOnShow;


После выполнения примера к компоненту «LanerResultsBox1» будет применено
 скрытие информации об ошибках.


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
