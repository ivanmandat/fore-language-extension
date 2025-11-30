# TabSheet.RenderDimComboEditor

TabSheet.RenderDimComboEditor
-


**


# TabSheet.RenderDimComboEditor


## Синтаксис


RenderDimComboEditor: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RenderDimComboEditor** генерируется при перерисовке раскрывающегося списка в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Обработаем событие RenderDimComboEditor:


// Обработаем событие RenderDimComboEditor
tabSheet.RenderDimComboEditor.add(function(sender, args) {
    console.log("Раскрывающийся список в таблице перерисован.")
});
// Вызовем событие RenderDimComboEditor
tabSheet.RenderDimComboEditor.fire(this);

В результате выполнения примера при наступлении события RenderDimComboEditor в консоли браузера будет выводиться сообщение о том, что раскрывающийся список в таблице перерисован.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
