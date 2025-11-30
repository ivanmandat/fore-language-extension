# NavigatorBox.invertSelection

NavigatorBox.invertSelection
-


# NavigatorBox.invertSelection


## Синтаксис


invertSelection();


## Описание


Метод invertSelection инвертирует
 отметку в списке объектов, то есть отмечает те элементы, которые не были
 отмечены, и снимает отметку с тех, которые были отмечены.


## Комментарии


Метод актуален, только если для свойства [NavigatorBox.ObjectListMultiSelect](NavigatorBox.ObjectListMultiSelect.htm)
 установлено значение true.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)». В теге BODY добавьте элемент DIVc
 идентификатором «radiobuttons». Разместим три переключателя и добавим
 обработчик события [NavigatorBox.ObjectSelected](NavigatorBox.ObjectSelected.htm):


            function RadioGroup(group, text, onChange, state)//Добавим функцию, содержащую значения свойств компонента RadioButton:
            {
                var radiobutton = new PP.Ui.RadioButton(
                {
                    ParentNode: document.getElementById("radiobuttons"),
                                    Checked: state, //Признак наличия отметки
                                    GroupName: group, //Имя группы
                                    Content: text, //Текст, который будет расположен рядом с переключателем
                                    CheckedChanged: onChange //Обработчик события смены отметки в группе переключателей

                });
            }
            //Экземпляры компонента RadioButton. В качестве параметров - значения свойств компонента.
            RadioGroup('group1', 'Выделить все', function ()
            {
                navbox.selectAll()
            }, true);
            RadioGroup('group1', 'Снять выделение', function ()
            {
                navbox.removeSelection()
            }, false);
            RadioGroup('group1', 'Инвертировать выделение', function ()
            {
                navbox.invertSelection()
            }, false);
            navbox.ObjectSelected.add(function (sender, args)
            {
                console.log("Отмечены элементы в папке с ключом " + navbox.getObjectsListRootKey())
            })

После выполнения примера на странице будет размещено три переключателя.
 При установке переключателя «Выделить все», будут отмечены все объекты
 в списке. При установке переключателя «Снять выделение» будет снята отметка
 со всех объектов в списке. При установке переключателя «Инвертировать
 выделение», выделение будет инвертировано, то есть, если все объекты были
 отмечены, с них будет снята отметка и наоборот. При выполнении любого
 из вышеперечисленных действий в консоль браузера будет выдаваться сообщение
 «Отмечены элементы в папке с ключом <Ключ открытой папки>».


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
