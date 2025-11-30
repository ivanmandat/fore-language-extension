# Ribbon.QuickAccessControls

Ribbon.QuickAccessControls
-


# Ribbon.QuickAccessControls


## Синтаксис


QuickAccessControls: Array;


## Описание


Свойство QuickAccessControls
 устанавливает кнопки панели быстрого доступа.


## Комментарии


Элементы массива - экземпляры класса PP.Ui.[Button](dhtmlUi.chm::/Classes/Button/Button.htm).


Значение свойства устанавливается из JSON и с помощью метода setQuickAccessControls,
 а возвращается с помощью метода getQuickAccessControls.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Ribbon](../../Components/Ribbon/Ribbon.htm) с наименованием
 «ribbon». На панель быстрого доступа должна быть добавлена как минимум
 одна кнопка (см. «[Пример
 создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). Получим количество кнопок панели быстрого
 доступа:


// Получаем количество кнопок панели быстрого доступа
console.log("Количество кнопок панели быстрого доступа: " + ribbon.getQuickAccessControls().length);
В результате в консоль будет выведено количество кнопок панели быстрого
 доступа:


Количество кнопок панели быстрого доступа: 1


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
