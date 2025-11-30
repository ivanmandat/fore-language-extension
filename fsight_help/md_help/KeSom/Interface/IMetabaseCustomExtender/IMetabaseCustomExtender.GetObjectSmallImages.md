# IMetabaseCustomExtender.GetObjectSmallImages

IMetabaseCustomExtender.GetObjectSmallImages
-


# IMetabaseCustomExtender.GetObjectSmallImages


## Синтаксис


GetObjectSmallImages(Var Imagelist: Object): Array;


## Параметры


ImageList. Ссылка на компонент,
 в который будут загружены измененные пиктограммы 16x16 пикселей. В качестве
 значения укажите существующий компонент ImageList или GlobalImageList.


## Описание


Метод GetObjectSmallImages возвращает
 классы, для которых была изменена системная пиктограмма.


## Комментарии


Результатом работы метода является массив, каждый элемент которого содержит
 класс объекта репозитория, для которого была изменена системная пиктограмма.
 Также при выполнении метода в переменной, которая передана в качестве
 входного параметра ImageList, будет создан новый компонент ImageList.


Индексы пиктограмм в ImageList соответствуют индексам элементов массива.


Системные пиктограммы, одинаковые для нескольких объектов (например,
 стандартный куб и куб ADOMD) по отдельности не заменяются.


Пиктограммы заменяются для всех приложений (studio.exe, adm.exe и других).


Заданные пиктограммы могут переноситься с помощью обновления репозитория
 вместе со специальным объектом «[Пользовательские
 метаданные](UpdManager.chm::/CreateUpdate/Admin_CreateUpdate_SpecialObjects.htm)».


## Пример


Для изменения пиктограмм для системных классов объектов может быть использован
 пример, приведенный в описании [IMetabaseCustomExtender.SetObjectSmallImages](IMetabaseCustomExtender.SetObjectSmallImages.htm).


Для выполнения примера создайте форму и разместите на ней кнопку, компоненты
 ImageList и ImageBox.


Добавьте ссылки на системные сборки: Drawing, Metabase.


Пример является обработчиком событий для кнопки:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    extender: IMetabaseCustomExtender;

    arr: array Of variant;

    imglist: object;

Begin

    mb := MetabaseClass.Active;

    extender := (mb.SpecialObject(MetabaseSpecialObject.CustomExtender)).Bind As IMetabaseCustomExtender;

    arr := extender.GetObjectSmallImages(imglist);

    ImageBox1.Image := (imglist As IImageList).Item(0);

End Sub Button1OnClick;


После выполнения примера в компонент ImageBox будут выведена первая
 измененная пиктограмма. В консоль будут выведены классы, для которых были
 изменены пиктограммы.


См. также:


[IMetabaseCustomExtender](IMetabaseCustomExtender.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
