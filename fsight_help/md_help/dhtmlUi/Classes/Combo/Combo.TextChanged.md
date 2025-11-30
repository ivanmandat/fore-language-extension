# Combo.TextChanged

Combo.TextChanged
-


# Combo.TextChanged


## Синтаксис


TextChanged: function (sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие TextChanged наступает
 при потере фокуса компонентом, после изменения текста.


## Пример


Для выполнения примера создайте компонент [Combo](../../Components/Combo/Combo.htm)
 (см. «[Пример создания
 компонента Combo](../../Components/Combo/Example_Combo.htm)»). Добавим обработчик события TextChanged:


Combo.TextChanged.add(function (sender, args)


      {


          alert("Text
 is changed");


      });


После выполнения примера при потере фокуса, после изменения текста,
 компонентом Combo будет выдаваться
 сообщение «Text is changed».


См. также:


[Combo](Combo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
