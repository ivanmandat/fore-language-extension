# CylinderGaugeValue.checkValue

CylinderGaugeValue.checkValue
-


# CylinderGaugeValue.checkValue


## Синтаксис


checkValue(value: Number);


## Параметры


value. Новое значение цилиндра.
 Параметр метода не может принимать отрицательные значения.


## Описание


Метод checkValue корректирует
 значение цилиндра.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Cylinder](../../../Components/Cylinder/Cylinder.htm) с наименованием
 «cylinder» (см. «[Пример
 создания компонента Cylinder](../../../Components/Cylinder/Cylinder_Example.htm)»). Скорректируем значение цилиндра:


// Скорректируем значение цилиндра
var currentValue = cylinder.getValue().checkValue(16);
console.log("Скорректированное значение цилиндра: %s", currentValue);
В результате выполнения примера в консоли браузера было выведено скорректированное
 значение цилиндра:


Скорректированное значение цилиндра: 10


См. также:


[CylinderGaugeValue](CylinderGaugeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
