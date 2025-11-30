# CheckBox.CheckedChanged

CheckBox.CheckedChanged
-


# CheckBox.CheckedChanged


## Синтаксис


CheckedChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргумент IsImgClick
 содержит признак того, что нажатие было произведено по пиктограмме. Если
 значение аргумента true, то произошло нажатие по пиктограмме,
 иначе - false.


## Описание


Событие CheckedChanged наступает
 при смене состояния отметки компонента.


## Комментарии


Событие устарело, используйте событие [CheckBox.ValueChanged](CheckBox.ValueChanged.htm).


## Пример


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных
 стилей PP.css. Создадим экземпляр компонента [CheckBox](../../Components/CheckBox/CheckBox.htm).
 Добавим обработчик события CheckedChanged:


<script type="text/javascript">
    var checkbox1 = new PP.Ui.CheckBox({//Создаем экземпляр компонента CheckBox
        ParentNode: document.getElementById("CB1"),
        Content: "выделить"
    });
    checkbox1.CheckedChanged.add(function (sender, args) {//Добавляем обработчик события CheckedChanged
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
