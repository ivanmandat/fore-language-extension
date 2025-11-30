# ICubeSegmentContainer.ReadIsActive

ICubeSegmentContainer.ReadIsActive
-


# ICubeSegmentContainer.ReadIsActive


## Синтаксис


ReadIsActive(Segment: [ICubeSegment](../ICubeSegment/ICubeSegment.htm)):
 Boolean;


## Параметры


Segment. Сегмент, для которого
 необходимо получить признак активности.


## Описание


Метод ReadIsActive получает
 для указанного сегмента признак активности.


## Комментарии


Настройки активных сегментов применяются при работе под пользователем,
 для которого розданы права на эти сегменты. Новые сегменты по умолчанию
 всегда активны. Признак активности можно изменить с помощью метода [WriteIsActive](ICubeSegmentContainer.WriteIsActive.htm).


## Пример


Использование свойства приведено в примере для [ICubeSegmentContainer.WriteIsActive](ICubeSegmentContainer.WriteIsActive.htm).


См. также:


[ICubeSegmentContainer](ICubeSegmentContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
