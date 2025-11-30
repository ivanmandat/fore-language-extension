# CheckBox.ValueChanged

CheckBox.ValueChanged
-


# CheckBox.ValueChanged


## Синтаксис


ValueChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ValueChanged наступает
 при смене значения компонента.


## Пример


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных
 стилей PP.css, добавьте на страницу div элемент с идентификатором «CB1».
 Создадим экземпляр компонента [CheckBox](../../Components/CheckBox/CheckBox.htm).
 Добавим обработчик события ValueChanged:


<script type="text/javascript">
    var checkbox1 = new PP.Ui.CheckBox({//Создаем экземпляр компонента CheckBox
        ParentNode: document.getElementById("CB1"),
        Content: "выделить"
    });
    checkbox1.ValueChanged.add(function (sender, args) {//Добавляем обработчик события ValueChanged
        var cb1 = checkbox1.getChecked();//Создаем переменную, содержащую значение свойства Checked
        if (cb1 === true)//Если компонент выделен,
        alert("Right"); //будет выдаваться сообщение «Right»
        //Проверяем, произошло ли нажатие по пиктограмме
        if (args.IsImgClick == true) {
            console.log("Нажатие было произведено по пиктограмме");
        } else {
            console.log("Нажатие было произведено не по пиктограмме");
        }
});
</script>
После выполнения примера на html-странице будет размещен компонент [CheckBox](../../Components/CheckBox/CheckBox.htm). При выделении
 компонента будет выводиться сообщение «Right». При снятии отметки сообщение
 выводиться не будет. Если нажатие было произведено по пиктограмме, то
 в консоль будет выведено следующее сообщение:


Нажатие было произведено по пиктограмме


Иначе:


Нажатие было произведено не по пиктограмме


См. также:


[CheckBox](CheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
