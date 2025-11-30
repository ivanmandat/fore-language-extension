# Dialog.getCancelButton

Dialog.getCancelButton
-


# Dialog.getCancelButton


## Синтаксис


getCancelButton ();


## Описание


Метод getCancelButton возвращает кнопку отмены.


## Комментарии


Кнопка отмены - экземпляр класса [Button](../Button/Button.htm).


## Пример


Для выполнения примера создайте [диалог настройки шрифта](../../Components/FontDialog/FontDialog.htm)с наименованием «fontdialog» и кнопку для вызова этого диалога с наименованием «b» (см. «[Пример создания компонента FontDialog](../../Components/FontDialog/FontDialog_example.htm)»). Добавим обработчик события Click кнопки:


        b.Click.add(function (sender, args) {
            fontdialog.show(100, 100);
            fontdialog.getCancelButton().setEnabled(false);
            fontdialog.getOkButton().setEnabled(false);
        });

После выполнения примера при нажатии на кнопку с наименованием «b» откроется [созданный диалог для настройки шрифта](../../Components/FontDialog/FontDialog_example.htm) с неактивными кнопками «Ok» и «Отмена».


См. также:


[Dialog](Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
