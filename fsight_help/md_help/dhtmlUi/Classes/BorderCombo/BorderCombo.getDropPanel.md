# BorderCombo.getDropPanel

BorderCombo.getDropPanel
-


# BorderCombo.getDropPanel


## Синтаксис


getDropPanel();


## Описание


Метод getDropPanel возвращает
 раскрывающуюся панель.


## Комментарии


Возвращаемое значение - объект класса [PP.UI.DropPanel](../DropPanel/DropPanel.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [BorderCombo](../../Components/BorderCombo/BorderCombo.htm)
 c наименованием «borderCombo» (см. «[Пример
 создания компонента BorderCombo](../../Components/BorderCombo/BorderCombo_example.htm)»). Проверяем, раскрыта ли панель в
 данный момент:


// Раскроем панель
borderCombo.getDropPanel().show();
// Проверяем, раскрыта ли панель
if (borderCombo.getDropPanel().getDroppedDown()) {
    console.log("Панель раскрыта");
} else {
    console.log("Панель скрыта");
}
В результате в консоль будет выведен результат проверки:


Панель скрыта


См. также:


[BorderCombo](BorderCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
