# Ribbon.SelectedItem

Ribbon.SelectedItem
-


# Ribbon.SelectedItem


## Синтаксис


SelectedItem: PP.Ui.[RibbonCategory](../RibbonCategory/RibbonCategory.htm)


## Описание


Свойство SelectedItem устанавливает
 активную вкладку ленты инструментов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSelectedItem,
 а возвращается с помощью метода getSelectedItem.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Ribbon](Ribbon.htm) c наименованием «ribbon» (см. «[Пример размещения
 компонента Ribbon из JSON](../../Components/Ribbon/Example_Ribbon_JSON.htm)»). Пример выполняется в консоли браузера.
 Добавим новую вкладку в ленту инструментов:


// Добавляем новую вкладку
ribbon.beginUpdate();
ribbon.addCategory(new PP.Ui.RibbonCategory({
    Caption: "Новая вкладка"
}));
ribbon.endUpdate();
Переходим на добавленную вкладку. Получаем заголовок активной
 вкладки ленты приложения:


// Получаем заголовок активной вкладки ленты приложения
console.log("Заголовок активной вкладки: " + ribbon.getSelectedItem().getCaption());
В результате в консоль будет выведен заголовок активной вкладки:


Заголовок активной вкладки: Новая вкладка


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
