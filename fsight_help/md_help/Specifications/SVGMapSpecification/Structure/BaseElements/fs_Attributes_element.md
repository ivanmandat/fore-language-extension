# Элемент fs:Attributes

Элемент fs:Attributes
-


# Элемент <fs:Attributes>


Элемент <fs:Attributes>
 является дочерним элементом элемента [<fs:MetaInfo>](fs_MetaInfo_element.htm) и используется
 для описания пользовательских атрибутов, которые содержат различную информацию
 о фигурах топоосновы. Элемент, в котором описывается пользовательский
 атрибут, должен называться <fs:Attribute>.
 Этот элемент является дочерним <fs:Attributes>
 и содержит обязательные атрибуты: Name
 и Type. Дочерним элементом <fs:Attribute> является элемент
 <fs:Data>, в атрибутах которого
 указываются фактические значения атрибута, связанные с определенной фигурой.


Для создания топооснов используются следующие атрибуты:


	- [Name](Attributes/Name_Attribute.htm);


	- [Description](Attributes/Description_Attribute.htm);


	- [ISO](Attributes/ISO_Attribute.htm) либо [IdMapping](Attributes/IdMapping_Attribute.htm);


	- [OriginOffset](Attributes/OriginOffset_Attribute.htm);


	- [TextOriginOffset](Attributes/TextOriginOffset_Attribute.htm);


	- [BarOriginOffset](Attributes/BarOriginOffset_Attribute.htm);


	- [PieOriginOffset](Attributes/PieOriginOffset_Attribute.htm);


	- [ImageOriginOffset](Attributes/ImageOriginOffset_Attribute.htm).


Атрибут <fs:Attributes>
 и все его дочерние атрибуты являются необязательными. Если какой-либо
 атрибут отсутствует, то при конвертации его значение будет пропущено,
 использовано значение по умолчанию либо значение будет сгенерировано автоматически.


## Синтаксис


<fs:Attributes>


    <fs:Attribute
 Name="ISO" Type="string">


        <fs:Data
 Id="RU-MOS" Value="RU-MOS" />


        ...


    </fs:Attribute>


    <fs:Attribute
 Name="OriginOffset" Type="point">


        <fs:Data
 Id="RU-MOS" Value="0.5,0.5" />


        ...


    </fs:Attribute>


    <fs:Attribute
 Name="TextOriginOffset" Type="point">


        <fs:Data
 Id="RU-MOS" Value="0.5,0.5" />


        ...


    </fs:Attribute>


    <fs:Attribute
 Name="BarOriginOffset" Type="point">


        <fs:Data
 Id="RU-MOS" Value="0.5,0.5" />


        ...


    </fs:Attribute>


    <fs:Attribute
 Name="PieOriginOffset" Type="point">


        <fs:Data
 Id="RU-MOS" Value="0.5,0.5" />


        ...


    </fs:Attribute>


    <fs:Attribute
 Name="ImageOriginOffset" Type="point">


        <fs:Data
 Id="RU-MOS" Value="0.5,0.5" />


        ...


    </fs:Attribute>


</fs:Attributes>


## Атрибуты элемента


Элемент <fs:Attributes>
 атрибутов не имеет.


Атрибуты элемента <fs:Attribute>:


		 Атрибут
		 Описание


		 Name
		 Наименование атрибута.


		 Type
		 Тип значений, который может принимать атрибут. Доступны следующие
		 значение:


			- int. Целочисленные
			 значения.


			- double. Вещественные
			 значения (в качестве разделителя целой и дробной части используется
			 точка).


			- bool. Логические
			 значения.


			- string. Строковые
			 значения.


			- date. Дата и
			 время.


			- point. Точка
			 на плоскости, описываемая двумя координатами типа double,
			 которые перечислены через запятую.


Атрибуты элемента <fs:Data>:


		 Атрибут
		 Описание


		 Id
		 Идентификатор фигуры, к которой относятся данные.


		 Value
		 Фактическое значение, которое соответствует фигуре. Тип значения
		 должен соответствовать тому типу, который задан в атрибуте Type элемента <fs:Attribute>.


Важно. Наименования
 всех атрибутов должны начинаться с заглавной буквы. Идентификатор фигуры
 не должен начинаться с цифры.


См. также:


[Структура
 SVG-топоосновы](../SVGMap_Structure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
