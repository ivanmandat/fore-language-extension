# Ribbon.CategoryDeselected

Ribbon.CategoryDeselected
-


# Ribbon.CategoryDeselected


## Синтаксис


CategoryDeselected: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие CategoryDeselected наступает
 при закрытии вкладки.


## Комментарии


Закрытие вкладки происходит при выборе другой вкладки.


## Пример


Для выполнения примера необходимо наличие на html-странице [ленты
 приложения](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon» (см. «[Пример
 создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). Лента содержит три вкладки «Главная»,
 «Текст», «Стиль».
 Добавим обработчик события CategoryDeselected.


ribbon.CategoryDeselected.add(function (sender, args) {
  ribbon.addCategory(new PP.Ui.RibbonCategory({
    Caption: "Вид"
  }), 4);
})

После выполнения примера при закрытии вкладок будет добавляться вкладка
 «Вид».


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
