# ScrollBar.getTrackSize

ScrollBar.getTrackSize
-


# ScrollBar.getTrackSize


## Синтаксис


getTrackSize ();


## Описание


Метод getTrackSize возвращает
 ширину прокручиваемой области.


## Комментарии


Ширина прокручиваемой области равна разнице между шириной и высотой
 [компонента](../../Components/ScrollBar/ScrollBar.htm). То
 есть, если ширина полосы прокрутки = 100, а высота = 10, то ширина прокручиваемой
 области составит 90 пикселей.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим полосу прокрутки с бегунком, ширина
 которого равна расстоянию между правой и левой кнопками прокрутки.


<script type="text/javascript">
    var hScrollBar = new PP.Ui.ScrollBar({
        ParentNode: document.getElementById("scroll1")
    });
    hScrollBar.setSize(200, 16);
    hScrollBar.setDraggerSize(hScrollBar.getTrackSize() - hScrollBar.getHeight());
</script>
После выполнения примера на html-странице будет размещена полоса прокрутки
 с бегунком, ширина которого равна расстоянию между правой и левой кнопками
 прокрутки.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
