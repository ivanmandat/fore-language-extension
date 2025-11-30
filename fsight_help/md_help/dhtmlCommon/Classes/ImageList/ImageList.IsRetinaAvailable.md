# ImageList.IsRetinaAvailable

ImageList.IsRetinaAvailable
-


# ImageList.IsRetinaAvailable


## Синтаксис


IsRetinaAvailable();


## Описание


Свойство IsRetinaAvailable возвращает
 признак возможности работы на устройстве с дисплеем Retina.


## Комментарии


Значение свойства определяется автоматически в зависимости от устройства,
 на котором выполнен вход в «Форсайт. Аналитическая платформа».


По умолчанию для свойства установлено значение false.


При открытии веб-приложения на устройстве с дисплеем Retina свойство
 принимает значение true.


## Пример


Для выполнения примера создадим компонент [ListBox](dhtmlList.chm::/components/listbox/listbox.htm)
 с наименованием «listbox2», содержащий невизуальный компонент [ImageList](dhtmlUi.chm::/components/imagelist/imagelist.htm)
 с наименованием «imagelist2» (см. «[Конструктор
 IconListItem](dhtmlUi.chm::/Classes/iconlistitem/constructor_iconlistitem.htm)»). Определим возможность работы на устройстве
 с дисплеем Retina:


var isretina
 = listbox2.getImageList().getIsRetinaAvailable();


alert(isretina);


После выполнения примера на экран будет выведено сообщение: true - если
 возможность есть, false - если работа на устройстве с дисплеем Retina
 не возможна.


См. также:


[ImageList](ImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
