# IRibbon.CustomDefaultMenuItem

IRibbon.CustomDefaultMenuItem
-


# IRibbon.CustomDefaultMenuItem


## Синтаксис


CustomDefaultMenuItem: String;


## Описание


Свойство CustomDefaultMenuItem
 возвращает наименование новой команды контекстного меню ленты инструментов.


## Комментарии


Если значение свойства не задано, то новая команда контекстного меню
 не будет отображаться.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 два компонента Button с наименованиями
 Button1 и Button2, компонент Ribbon
 с наименованием Ribbon1. Компонент Ribbon
 наполнен двумя компонентами RibbonCategory
 с наименованиями RibbonCategory1 и RibbonCategory2, каждый из которых
 содержит компонент RibbonPanel
 с наименованиями RibbonPanel1 и RibbonPanel2. На компоненте с наименованием
 RibbonPanel1 размещается компонент RibbonButton
 с наименованием RibbonButton1.


Свойству CustomDefaultMenuItem
 компонента Ribbon задано значение
 «Настройка ленты инструментов».


Добавьте ссылки на системные сборки: Ui.


Пример является обработчиком событий OnClick для компонентов с наименованиями
 Button1 и Button2 и события OnCustomDefaultMenuItem для компонента с наименованием
 Ribbon1.


			// Добавляем кнопку на другую вкладку

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    RibbonPanel2.AddReferenceElement(RibbonButton1);

End Sub Button1OnClick;

// Изменяем наименование кнопок

Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    RibbonButton1.Text := "Новый текст";

End Sub Button2OnClick;

// Выводим сообщение при выборе новой команды контекстного меню

Sub Ribbon1OnClickCustomDefaultMenuItem(Sender: Object; Args: IEventArgs);

Begin

    WinApplication.InformationBox("OnClickCustomDefaultMenuItem");

End Sub Ribbon1OnClickCustomDefaultMenuItem;


В результате выполнения примера:


	- При вызове контекстного меню ленты инструментов будет отображаться
	 команда, указанная как значение в свойстве CustomDefaultMenuItem.
	 При выполнении команды будет выведено сообщение.


	- При нажатии на кнопку Button1 на компонент с наименованием RibbonPanel2
	 будет добавлена кнопка, которая является ссылкой на кнопку, находящуюся
	 на компоненте с наименованием RibbonPanel1. Добавленная кнопка будет
	 зависеть от состояния кнопки, на которую она ссылается.


	- При нажатии на кнопку Button2 наименование обоих кнопок будет
	 заменено на значение, указанное в обработчике события - «Новый текст».


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
