# IMetabaseCustomExtender.SetObjectLargeImages

IMetabaseCustomExtender.SetObjectLargeImages
-


# IMetabaseCustomExtender.SetObjectLargeImages


## Синтаксис


SetObjectLargeImages(Imagelist: Object; ARRAYID:
 Array);


## Параметры


ImageList. Ссылка на компонент,
 в который будут загружены изменяемые пиктограммы 32x32 пикселей. В качестве
 значения укажите существующий компонент ImageList или GlobalImageList.


ARRAYID. Массив классов, для
 которых заменяются пиктограммы.


## Описание


Метод SetObjectLargeImages определяет
 копию коллекции с изображениями 32x32 пикселей для массива с классами.


## Комментарии


Индексы пиктограмм в ImageList соответствуют индексам элементов массива.


Системные пиктограммы, одинаковые для нескольких объектов (например,
 стандартный куб и куб ADOMD) по отдельности не заменяются.


Пиктограммы заменяются для всех приложений (studio.exe, adm.exe итд).


Заданные пиктограммы могут переноситься с помощью обновления репозитория
 вместе со специальным объектом «Пользовательские метаданные».


## Пример


Для выполнения примера создайте форму и разместите на ней кнопку и компонент
 ImageList с тремя картинками.


Добавьте ссылки на системные сборки: Drawing, Metabase.


			Sub SetLargeImages(imglist: IImageList);

Var

    extender: IMetabaseCustomExtender;

    mb: IMetabase;

    arr: array Of variant;

Begin

    mb := MetabaseClass.Active;

    arr := New Variant[3];

    arr[0] := MetabaseObjectClass.KE_CLASS_FOLDER;

    arr[1] := MetabaseObjectClass.KE_CLASS_FORM;

    arr[2] := MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT;

    extender := (mb.SpecialObject(MetabaseSpecialObject.CustomExtender)).Edit As IMetabaseCustomExtender;

    extender.SetObjectLargeImages(imglist, arr);

    (extender As IMetabaseObject).Save;

End Sub SetLargeImages;


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    SetLargeImages(ImageList1);

End Sub Button1OnClick;


После выполнения примера из указанного ImageList будут установлены
 пиктограммы для указанных в архиве классов.


См. также:


[IMetabaseCustomExtender](IMetabaseCustomExtender.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
