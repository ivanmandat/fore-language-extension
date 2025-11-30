# TabControl.TabTextEditing

TabControl.TabTextEditing
-


# TabControl.TabTextEditing


## Синтаксис


TabTextEditing: function (sender, args: Object);


## Параметры


sender.
 Источник события;


args. Информация о событии.


## Описание


Событие TabTextEditing наступает
 при выходе из режима редактирования заголовка вкладки, даже если текст
 данного заголовка не был изменён.


## Комментарии


Допустимые значения параметра args:


	- TabIndex. Индекс редактируемой
	 вкладки;


	- Caption. Заголовок редактируемой
	 вкладки.


Для вызова события при выходе из режима редактирования заголовка вкладки
 только при изменении заголовка используйте событие [TabControl.TabTextEdited](TabControl.TabTextEdited.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabControl](../../Components/TabControl/TabControl.htm)
 с наименованием «tabcontrol» (см. «[Пример
 создания компонента TabControl](../../Components/TabControl/Example_TabControl.htm)»). Включим возможность редактирования
 заголовков вкладок и обработаем событие TabTextEditing:


// Разрешим редактирование заголовков
tabcontrol.setEnableEdit(true);
// Обработаем событие EnableEditing
tabcontrol.TabTextEditing.add(function (sender, args) {
    console.log("Индекс редактируемой вкладки: " + args.TabIndex);
    console.log("Заголовок редактируемой вкладки: " + args.Caption);
});

В результате выполнения примера после редактирования заголовка любой
 вкладки в консоли браузера каждый раз будет выводиться индекс и заголовок
 этой вкладки:


Индекс редактируемой вкладки: 4


Заголовок редактируемой вкладки: Filler


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
