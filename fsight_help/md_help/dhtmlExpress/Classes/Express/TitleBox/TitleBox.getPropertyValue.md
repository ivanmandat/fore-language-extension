# TitleBox.getPropertyValue

TitleBox.getPropertyValue
-


# TitleBox.getPropertyValue


## Синтаксис


getPropertyValue(propertyName: [PP.Exp.Ui.TitleProperties](../../../Enums/TitleProperties.htm));


## Параметры


propertyName. Наименование свойства, значение которого требуется получить.


## Описание


Метод getPropertyValue возвращает значение указанного свойства.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TitleBox](../../../Components/Express/TitleBox/TitleBox.htm) с наименованием «titleBox» (см. «Пример создания компонента EaxTitleMaster»). Обработаем событие [PropertyChanged](TitleBox.PropertyChanged.htm):


title.PropertyChanged.add(function (sender, args) {
    console.log("Изменённое свойство: %s, значение: %s", args.getPropertyName(),
        title.getPropertyValue(args.getPropertyName()));
});

Теперь установим флажок в мастере для настройки заголовка «Отображать как элемент управления». В результате этого после наступления события PropertyChanged в консоли браузера будут выведены наименование изменённого свойства и его значение:


Изменённое свойство: TitleType, значение: Control


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
