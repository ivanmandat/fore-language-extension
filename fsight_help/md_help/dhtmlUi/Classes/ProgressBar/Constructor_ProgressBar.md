# Конструктор ProgressBar

Конструктор ProgressBar
-


# Конструктор ProgressBar


## Синтаксис


PP.Ui.ProgressBar (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор ProgressBar создает экземпляр компонента [ProgressBar](../../Components/ProgressBar/ProgressBar.htm).


## Пример


Для выполнения в теге HEAD добавьте ссылки на библиотеку компонентов PP.js и визуальные стили PP.css. В теге BODY добавьте элемент DIV с идентификатором «progressBar». В теге SCRIPT добавьте код для создания компонента:


    //компонент ProgressBar
    var progressBar = new PP.Ui.ProgressBar(
    {
        ParentNode: document.getElementById("progressBar"),
        Width: 200,
        Height: 20,
        //компонент размещен горизонтально
        IsVertical: false,
        //отображается значение
        DisplayValue: true,
        //значение определяется без тысячных долей
        IsPrecision: false,
        //начальное значение
        Value: 10
    });
    var inc = 1;
    //интервал выполнения функции go() - полсекунды
    setInterval('go()', 500);
    //функция изменения значения компонента ProgressBar
    function go()
    {
        var cur = progressBar.getValue();
        if (cur >= 100 || cur <= 0)
        {
            inc *= -1;
        }
        progressBar.setValue(cur + (2 * inc));
    }

После выполнения примера на странице будет размещен компонент [ProgressBar](../../Components/ProgressBar/ProgressBar.htm), значение которого каждые полсекунды изменяется на 2 (увеличивается, если значение меньше 100, и уменьшается, если больше 100):


![](ProgressBar1.gif)


См. также:


[ProgressBar](ProgressBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
