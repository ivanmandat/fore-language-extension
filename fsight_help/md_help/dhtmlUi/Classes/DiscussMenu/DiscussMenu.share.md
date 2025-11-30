# DiscussMenu.share

DiscussMenu.share
-


# DiscussMenu.share


## Синтаксис


share (type: PP.Ui.[ShareType](../../Enums/ShareType.htm), url, title)


## Параметры


type. Социальная сеть, в которой будет публиковаться сообщение. Экземпляр перечисления [PP.Ui.ShareType](../../Enums/ShareType.htm);


url. Ссылка на страницу, которую необходимо опубликовать. По умолчанию ссылка на текущую страницу;


title. Заголовок публикуемого сообщения.


## Описание


Метод share публикует ссылку на указанную страницу в выбранной социальной сети.


## Пример


Для выполнения примера предполагается наличие на странице компонента [DiscussMenu](../../Components/DiscussMenu/DiscussMenu.htm) с наименованием «shareMenu» (см. «[Пример создания компонента DiscussMenu](../../Components/DiscussMenu/Example_DiscussMenu.htm)»). Добавим кнопку, при нажатии на которую будет осуществляться публикация на LinkedIn:


    var but3 = new PP.Ui.Button(
    {
        Content: "Опубликовать на LinkedIn",
        ParentNode: document.getElementById("btn3"),
        Click: function ()
        {
            shareMenu.setAutoShare(false);//при выборе пунктов меню не будет осуществляться переход на соответствующую страницу социальной сети
            shareMenu.setTitle("My report");//устанавливаем заголовок для публикуемого сообщения
            shareMenu.setUrl("http://pp:8080/pp/app/dashboard.html");//устанавливаем ссылку для публикации
            shareMenu.share(PP.Ui.ShareType.LinkedIn, shareMenu.getUrl(), shareMenu.getTitle());//публикация
        }
    });

После выполнения примера при нажатии на пункты меню не будет осуществляться публикация. При нажатии на кнопку «Опубликовать на LinkedIn» будет осуществлена публикация ссылки, установленной для меню в значении свойства [DiscussMenu.Url](DiscussMenu.Url.htm) методом setUrl. Заголовок публикуемого сообщения - «My report».


См. также:


[DiscussMenu](DiscussMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
