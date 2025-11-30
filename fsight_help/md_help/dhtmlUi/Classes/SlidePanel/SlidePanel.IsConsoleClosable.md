# SlidePanel.IsConsoleClosable

SlidePanel.IsConsoleClosable
-


# SlidePanel.IsConsoleClosable


## Синтаксис


IsConsoleClosable: Boolean


## Описание


Свойство IsConsoleClosable определяет, отображается ли кнопка закрытия консоли.


## Комментарии


Консоль - объединение панелей Header и Details.


Если для свойства установлено значение false, кнопка закрытия консоли отображается. По умолчанию установлено значение true, то есть кнопка отображается.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [SlidePanel](../../Components/SlidePanel/SlidePanel.htm) с наименованием «slidePanel» (см. «[Пример создания компонента SlidePanel](../../Components/SlidePanel/Example_SlidePanel.htm)»).Скроем кнопку ![](../../Components/SlidePanel/SlidePanel4.gif):


slidePanel.setIsConsoleClosable(false);


После выполнения примера кнопка отображаться не будет.


См. также:


[SlidePanel](slidepanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
