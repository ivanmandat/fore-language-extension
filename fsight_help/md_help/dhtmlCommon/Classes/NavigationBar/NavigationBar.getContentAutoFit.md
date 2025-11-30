# NavigationBar.getContentAutoFit

NavigationBar.getContentAutoFit
-


# NavigationBar.getContentAutoFit


## Синтаксис


getContentAutoFit();


## Описание


Метод getContentAutoFit возвращает
 признак использования автоподгонки содержимого панели свойств.


## Комментарии


Метод возвращает значение true,
 если используется автоподгонка содержимого панели свойства, иначе - значение
 false.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Проверяем использование автоподгонки
 содержимого панели:


// Проверяем использование автоподгонки содержимого панели свойств
if (navigationBar.getContentAutoFit()) {
    console.log("Используется автоподгонка содержимого панели свойств");
} else {
    console.log("Автоподгонка содержимого панели свойств не используется");
}
В результате в консоль будет выведен результат проверки использования
 автоподгонки:


Автоподгонка содержимого панели свойств не используется


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
