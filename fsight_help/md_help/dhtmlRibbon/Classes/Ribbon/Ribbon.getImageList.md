# Ribbon.getImageList

Ribbon.getImageList
-


# Ribbon.getImageList


## Синтаксис


getImageList ()


## Описание


Метод getImageList возвращает
 объект PP.[ImageList](dhtmlCommon.chm::/Classes/imagelist/imagelist.htm),
 содержащий путь к файлу с картинками.


## Комментарии


Установить объект PP.ImageList, содержащий путь к файлу с картинками
 можно из конструктора при помощи свойства ImageList
 и в поле _ImageList.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 Ribbon с наименованием «ribbon». Определим для ленты файл с картинками.
 Добавим кнопку на панель с идентификатором «Insert», для кнопки выберем
 изображение из этого файла:


ribbon._ImageList = new
 PP.ImageList(


{


    Source: "PP_img/navigator/GlbClsImg32.png",


    IconWidth: 16,


    IconHeight: 16


})


ribbon.getControlById("Insert").addControl(new PP.Ui.RibbonButton(


{


    Content: "Новая
 кнопка",


    ColumnIndex: 0,


    RowIndex: 0,


    ImageList: ribbon.getImageList()


}))


После выполнения примера на вкладку ленты с идентификатором «Insert»
 будет добавлена кнопка с изображением из файла с картинками, определенного
 для ленты.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
