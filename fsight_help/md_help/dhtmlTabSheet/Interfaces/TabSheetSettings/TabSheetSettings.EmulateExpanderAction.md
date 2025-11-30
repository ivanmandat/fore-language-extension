# TabSheetSettings.EmulateExpanderAction

TabSheetSettings.EmulateExpanderAction
-


**


# TabSheetSettings.EmulateExpanderAction


## Синтаксис


EmulateExpanderAction: Boolean


## Описание


Свойство EmulateExpanderAction**
 устанавливает режим эмуляции действия кнопки развёртывания.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода **setEmulateExpanderAction**
 и возвращается при помощи метода g**etEmulateExpanderAction**.


Свойство содержит значение типа Boolean. Если оно равно true,
 то в таблице не будут самостоятельно добавляться или удаляться строки
 и столбцы, если false, то будут.


По умолчанию значение свойства равно false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). При этом кнопка развёртывания должна
 находиться в состоянии «развёрнуто». Запретим автоматическое удаление
 строк и столбцов при переходе данной кнопки в состоянии «свёрнуто»:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим кнопку развёртывания
var expander = model.getExpanders()[0];
// Строки и столбцы автоматически не скроются
tabSheet.setEmulateExpanderAction(true);
// Скрываем группу
expander.collapse();
if(expander.getIsCollapsed()) {
    console.log("Кнопка свёрнута.");
} else {
    console.log("Кнопка развёрнута.");
};

В результате выполнения примера при переходе кнопки в состоянии «свёрнуто»
 строки и столбцы таблицы удалены не будут:


![](../../Classes/TabSheet/TabSheet/TabSheet.EmulateExpanderAction.png)


Также в консоли браузера будет выведено сообщение, что данная кнопка
 свёрнута.


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
