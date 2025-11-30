# IMetabaseCustomExtender.ResetObjectImages

IMetabaseCustomExtender.ResetObjectImages
-


# IMetabaseCustomExtender.ResetObjectImages


## Синтаксис


ResetObjectImages();


## Описание


Метод ResetObjectImages устанавливает
 системные пиктограммы для классов.


## Пример


Для выполнения примера создайте форму и разместите на ней кнопку.


Добавьте ссылку на системную сборку Metabase.


Пример является обработчиком событий для кнопки:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Extender: IMetabaseCustomExtender;

Begin

    MB := MetabaseClass.Active;

    Extender := MB.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

    Extender.ResetObjectImages;

    (Extender As IMetabaseObject).Save;

End Sub Button1OnClick;


После выполнения примера для классов буду использованы системные пиктограммы.


См. также:


[IMetabaseCustomExtender](IMetabaseCustomExtender.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
