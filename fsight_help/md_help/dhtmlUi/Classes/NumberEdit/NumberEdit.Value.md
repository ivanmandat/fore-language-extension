# NumberEdit.Value

NumberEdit.Value
-


# NumberEdit.Value


## Синтаксис


Value: Number;


## Описание


Свойство Value устанавливает
 числовое значение компонента.


## Комментарии


Значение свойства задается в конструкторе [NumberEdit](Constructor_NumberEdit.htm)
 или с помощью метода setValue,
 а возвращается с помощью метода getValue.


Если значение для свойства не установлено, в окне редактора будет установлено
 значение 0. Если значение 0 не входит в диапазон от [минимального](NumberEdit.MinValue.htm)
 до [максимального](NumberEdit.MaxValue.htm) значения, то в
 строке ввода будет установлено ближайшее валидное значение. При потере
 фокуса компонентом будет установлено минимальное допустимое значение.


Если значение содержит несколько знаков после запятой, то при использовании
 метода getValue число округляется
 в зависимости от заданного значения свойства [NumberEdit.FractionCount](NumberEdit.FractionCount.htm).
 Для получения заданного числа без округления используйте метод [NumberEdit.getUnroundValue](NumberEdit.getUnroundValue.htm).


## Пример


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания числового редактора значений используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>NumberEdit</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />

    <script text="text/javascript">
        function Ready()   {
            // Создадим экземпляр компонента NumberEdit
            NE = new PP.Ui.NumberEdit({
                ParentNode: document.getElementById("NE"), // идентификатор, который содержится в теге div
                Width: "170px", // ширина компонента
                Height: "21px", // высота компонента
                Value: "5.468953", // значение компонента
                FractionCount: 4,// количество знаков после запятой
            });
            // Выведем в консоль округленное и неокругленное значение компонента
            console.log(NE.getValue());
            console.log(NE.getUnroundValue());
        };
    </script>
</head>
<body onload="Ready()">
    <div id="NE"></div>
</body>
</html>

После выполнения примера на html-странице будет размещен числовой редактор
 с установленным значением:


![](../../Components/NumberEdit/NumberEdit2.gif)


В консоль будет выведено округленное и неокругленное значение компонента:


5.469


5.468953


См. также:


[NumberEdit](NumberEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
