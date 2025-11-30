# NavigatorBox.getCustomClassObject

NavigatorBox.getCustomClassObject
-


# NavigatorBox.getCustomClassObject


## Синтаксис


getCustomClassObject(obj);


## Параметры


obj. Объект
 пользовательского класса, экземпляр класса PP.Mb.[Object](../Object/Object.htm)
 или PP.Mb.[Descriptor](../Descriptor/Descriptor.htm).


## Описание


Метод getCustomClassObject возвращает
 идентификатор класса пользовательского объекта.


## Пример


Для выполнения примера предполагается наличие на html-странице объекта
 репозитория с наименованием «mb» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). В репозитории должен быть создан
 пользовательский класс и его объекты (см. «[Создание объекта
 собственного класса](KeSom.chm::/Examples/Example_1_CustomClass.htm)»). Получим класс выделенного
 пользовательского объекта:


obj = navbox.getSelectedObjects()[0];//получаем первый выделенный объект


Console.log(navbox.getCustomClassObject(obj));//получаем класс пользовательского объекта,
 элемент перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


После выполнения примера в консоль браузера будет выведен идентификатор
 класса первого выделенного пользовательского объекта.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
