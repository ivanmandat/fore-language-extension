# GetTabTableStylePreview: Операция

GetTabTableStylePreview: Операция
-


**


# GetTabTableStylePreview


## Синтаксис


GetTabTableStylePreviewResult GetTabTableStylePreview(TabSheetId
 tTabSheet, TabTableStyle tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetTabTableStylePreview
 получает изображения предварительного просмотра для стиля таблицы и элемента
 стиля таблицы.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы. Моникёр может быть сформирован на основании моникёра
 открытого экземпляра объекта, с таблицей которого осуществляется работа,
 по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Tab.
	 Таблица экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Tab. Таблица заданного листа экспресс-отчета (если в
	 экспресс-отчете несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Tab. Таблица рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Tab. Таблица заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!CorrTab. Таблица с матрицей корреляции.


	- «Моникёр экземпляра рабочей
	 книги»!CoeffTab. Таблица с коэффициентами уравнения.


	- «Моникёр экземпляра рабочей
	 книги»!WeightsTab. Таблица с матрицей весов.


	- «Моникёр экземпляра регламентного
	 отчета»!Ключ листа. Таблица отдельного листа регламентного
	 отчета.


В поле tArg необходимо определить
 дочерние поля PredefinedStyle
 и ChangedElement. Поле Name также является обязательным,
 в качестве его значения можно передать пустую строку.


Результатом выполнения операции будут настройки сформированного стиля
 и два изображения предварительного просмотра.


## Пример


Ниже приведён пример получения изображений предварительного просмотра
 для стиля таблицы и элемента стиля таблицы. В запросе передаётся моникёр
 таблицы, предопределённый стиль, на базе которого будет строиться новый
 стиль - тёмно-зеленый, элемент стиля, для которого будет получено изображение
 предварительного просмотра - первая строка. В ответе возвращаются полученные
 настройки стиля и изображения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabTableStylePreview xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>PLCGJPLGPMOAGOAENDFPIFJILCKFEEEEIIJLDOCDGCOHBCAL!M!S!POMFJHAMGPMOAGOAEDMFNPFCKLHFEFHEELKEEIPCIADKIBMJP!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <Name />
  <PredefinedStyle>DarkGreen</PredefinedStyle>  <ChangedElement>FirstRow</ChangedElement>  </tArg>
  </GetTabTableStylePreview>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabTableStylePreviewResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<tableStyle xmlns="****">
  <Name>Стиль таблицы 1</Name>[![](../../../minus.gif)](../../../#)<Range>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  </Range>
[![](../../../minus.gif)](../../../#)<FirstRow>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style AE="**-1**" UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#CADBA6**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </Style>
  </FirstRow>
[![](../../../minus.gif)](../../../#)<SecondRow>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style AE="**-1**" UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#E3ECD2**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </Style>
  </SecondRow>
[![](../../../minus.gif)](../../../#)<FirstColumn>
  <Width>1</Width>  </FirstColumn>
[![](../../../minus.gif)](../../../#)<SecondColumn>
  <Width>1</Width>  </SecondColumn>
[![](../../../minus.gif)](../../../#)<HeaderRow>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style AE="**-1**" UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#AEC878**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </Style>
  </HeaderRow>
[![](../../../minus.gif)](../../../#)<HeaderColumn>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style AE="**-1**" UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#AEC878**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </Style>
  </HeaderColumn>
[![](../../../minus.gif)](../../../#)<FooterRow>
  <Width>0</Width>  </FooterRow>
[![](../../../minus.gif)](../../../#)<FooterColumn>
  <Width>0</Width>  </FooterColumn>
  <PredefinedStyle>DarkGreen</PredefinedStyle>  <IsEmpty>0</IsEmpty>  </tableStyle>
  <elementStylePreview xmlns="****" W="**200**" H="**40**">iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAYAAAC7HLUcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALfSURBVHhe7Zi7ceMwEIZZkXPNuASVoFCqQkrVgBM14HHuDhy7hSsGxuLFxYMrH2mPx3df8M0RwALYPf4/QHl6//PiAGAMBgEwwCAABp1BbsfJTdPM4bkef387uZ0an46XevxXcHGHae9uwzGAmcogwRyV4EVI2iRP7vz44M5vuf1bwSDwOWaDyM3weHKvarDv98I6nrxJ8g2iRRZFdyg3UC3A1+tD6p/c7vqU+sVwg3h9S+W92/ysfPPcJodyO3qT7yZP3lsfCovzjfrSnK4unXtZMzEakz5pj+ps+kMtoR0PsW5d+BJmgzzvFz6X1GmbXma+UYLoy5z4ooZj+uXqZ7WnxEeB1bdU6W8E0rUDUZjDHGQvvW/JVe9nzL9bnxhO19i2R7kPaj3ux7F6DZ9/jrt1eai5sJlikCJENRhpDdKenLmt4kbtEJtPujZOn3yprREBtC9/JIZRTNqrrq/OrYwZ88360ryzF23e63BVa43WDe1BrWKsrs/HljliKr9PbuuDrd0HNvP3n1g6xhprBTR6VswCVvM0bX5t+07MaoOU9p36/Jic5nLD3MQoeu7iuoNal2Lzv3J7tLmmG7GYKc+Fzaz4kb7iE0SdcqE/iUKLdn6u95Cc7os3Y+QnOTSCinH6M2dlfVrE3hzBSDq/xdwHtZqfWP7/qFuzN2qZC5upDCKUH7KB0V+solDiuD794osa/0if5+yulyCKaIaFteRF534tiBKraAVRxekcVG3hM0bEFtvZpPZ8o74izFhPbehogtloOj495/2kT4/p2BSXzZT7z2KqnH87FzbTGWQ9UUBakN/OakGsyfUH6oMfB4N8GgzyP/KFBgH498AgAAYYBMAAgwAYYBAAAwwCYIBBAAwwCIABBgEwwCAABhgEwACDABhgEAADDAJggEEADDAIgAEGATDAIAAGGATAAIMAGGAQAAMMAmCAQQAMMAiAAQYBMMAgAAYYBGCRF/cBe79o4IVC4mMAAAAASUVORK5CYII=</elementStylePreview>  <tableStylePreview xmlns="****" W="**255**" H="**118**">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</tableStylePreview>  </GetTabTableStylePreviewResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabTableStylePreview" :
  {
   "tTabSheet" :
    {
     "id" : "PLCGJPLGPMOAGOAENDFPIFJILCKFEEEEIIJLDOCDGCOHBCAL!M!S!POMFJHAMGPMOAGOAEDMFNPFCKLHFEFHEELKEEIPCIADKIBMJP!Sheets!1"
    },
   "tArg" :
    {
     "Name" : "",
     "PredefinedStyle" : "DarkGreen",
     "ChangedElement" : "FirstRow"
    }
  }
}

### JSON-ответ:


{
 "GetTabTableStylePreviewResult" :
  {
   "tableStyle" :
    {
     "Name" : "Стиль таблицы 1",
     "Range" :
      {
       "left" : "0",
       "top" : "0",
       "width" : "0",
       "height" : "0"
      },
     "FirstRow" :
      {
       "Width" : "1",
       "Style" :
        {
         "@AE" : "-1",
         "@UNS" : "2",
         "Text" :
          {
           "@VA" : "-1",
           "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
           "@HA" : "-1",
           "@WW" : "-1"
          },
         "Fill" :
          {
           "@C" : "#CADBA6"
          },
         "DefaultFont" :
          {
           "@A" : "0",
           "@B" : "false",
           "@SO" : "false",
           "@S" : "8",
           "@C" : "#000000",
           "@U" : "false",
           "@F" : "Arial",
           "@TR" : "0",
           "@H" : "12",
           "@I" : "false"
          },
         "Borders" : "",
         "Hyperlink" : ""
        }
      },
     "SecondRow" :
      {
       "Width" : "1",
       "Style" :
        {
         "@AE" : "-1",
         "@UNS" : "2",
         "Text" :
          {
           "@VA" : "-1",
           "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
           "@HA" : "-1",
           "@WW" : "-1"
          },
         "Fill" :
          {
           "@C" : "#E3ECD2"
          },
         "DefaultFont" :
          {
           "@A" : "0",
           "@B" : "false",
           "@SO" : "false",
           "@S" : "8",
           "@C" : "#000000",
           "@U" : "false",
           "@F" : "Arial",
           "@TR" : "0",
           "@H" : "12",
           "@I" : "false"
          },
         "Borders" : "",
         "Hyperlink" : ""
        }
      },
     "FirstColumn" :
      {
       "Width" : "1"
      },
     "SecondColumn" :
      {
       "Width" : "1"
      },
     "HeaderRow" :
      {
       "Width" : "1",
       "Style" :
        {
         "@AE" : "-1",
         "@UNS" : "2",
         "Text" :
          {
           "@VA" : "-1",
           "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
           "@HA" : "-1",
           "@WW" : "-1"
          },
         "Fill" :
          {
           "@C" : "#AEC878"
          },
         "DefaultFont" :
          {
           "@A" : "0",
           "@B" : "false",
           "@SO" : "false",
           "@S" : "8",
           "@C" : "#000000",
           "@U" : "false",
           "@F" : "Arial",
           "@TR" : "0",
           "@H" : "12",
           "@I" : "false"
          },
         "Borders" : "",
         "Hyperlink" : ""
        }
      },
     "HeaderColumn" :
      {
       "Width" : "1",
       "Style" :
        {
         "@AE" : "-1",
         "@UNS" : "2",
         "Text" :
          {
           "@VA" : "-1",
           "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
           "@HA" : "-1",
           "@WW" : "-1"
          },
         "Fill" :
          {
           "@C" : "#AEC878"
          },
         "DefaultFont" :
          {
           "@A" : "0",
           "@B" : "false",
           "@SO" : "false",
           "@S" : "8",
           "@C" : "#000000",
           "@U" : "false",
           "@F" : "Arial",
           "@TR" : "0",
           "@H" : "12",
           "@I" : "false"
          },
         "Borders" : "",
         "Hyperlink" : ""
        }
      },
     "FooterRow" :
      {
       "Width" : "0"
      },
     "FooterColumn" :
      {
       "Width" : "0"
      },
     "PredefinedStyle" : "DarkGreen",
     "IsEmpty" : "0"
    },
   "elementStylePreview" :
    {
     "@W" : "200",
     "@H" : "40",
     "$" : "iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAYAAAC7HLUcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALfSURBVHhe7Zi7ceMwEIZZkXPNuASVoFCqQkrVgBM14HHuDhy7hSsGxuLFxYMrH2mPx3df8M0RwALYPf4\/QHl6\/\/PiAGAMBgEwwCAABp1BbsfJTdPM4bkef387uZ0an46XevxXcHGHae9uwzGAmcogwRyV4EVI2iRP7vz44M5vuf1bwSDwOWaDyM3weHKvarDv98I6nrxJ8g2iRRZFdyg3UC3A1+tD6p\/c7vqU+sVwg3h9S+W92\/ysfPPcJodyO3qT7yZP3lsfCovzjfrSnK4unXtZMzEakz5pj+ps+kMtoR0PsW5d+BJmgzzvFz6X1GmbXma+UYLoy5z4ooZj+uXqZ7WnxEeB1bdU6W8E0rUDUZjDHGQvvW\/JVe9nzL9bnxhO19i2R7kPaj3ux7F6DZ9\/jrt1eai5sJlikCJENRhpDdKenLmt4kbtEJtPujZOn3yprREBtC9\/JIZRTNqrrq\/OrYwZ88360ryzF23e63BVa43WDe1BrWKsrs\/HljliKr9PbuuDrd0HNvP3n1g6xhprBTR6VswCVvM0bX5t+07MaoOU9p36\/Jic5nLD3MQoeu7iuoNal2Lzv3J7tLmmG7GYKc+Fzaz4kb7iE0SdcqE\/iUKLdn6u95Cc7os3Y+QnOTSCinH6M2dlfVrE3hzBSDq\/xdwHtZqfWP7\/qFuzN2qZC5upDCKUH7KB0V+solDiuD794osa\/0if5+yulyCKaIaFteRF534tiBKraAVRxekcVG3hM0bEFtvZpPZ8o74izFhPbehogtloOj495\/2kT4\/p2BSXzZT7z2KqnH87FzbTGWQ9UUBakN\/OakGsyfUH6oMfB4N8GgzyP\/KFBgH498AgAAYYBMAAgwAYYBAAAwwCYIBBAAwwCIABBgEwwCAABhgEwACDABhgEAADDAJggEEADDAIgAEGATDAIAAGGATAAIMAGGAQAAMMAmCAQQAMMAiAAQYBMMAgAAYYBGCRF\/cBe79o4IVC4mMAAAAASUVORK5CYII="
    },
   "tableStylePreview" :
    {
     "@W" : "255",
     "@H" : "118",
     "$" : "iVBORw0KGgoAAAANSUhEUgAAAP8AAAB2CAYAAAAHt0XaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAhESURBVHhe7dyxahxJEMbxeRQ\/gMCJkREYhUaBU1uBAwlj+wEOSyAMipwYgeXEmTA4OLOZMoXiAsGll116b9I3NaPR9kjtBtdUwxb1D36B5gP7m4aanV7Y7v68\/iMBiIfhB4Ji+IGgGH4gKIYfCGo9\/F+epO7J8\/Q1C79+eJS6Vy\/1WXbNjJeewktXLz0FXc3MPvnlP3j84e34txTI\/jNt1oKXnsJLVy89BV1t3Hvtf5vePXmU3v18mV50T9JHk6wFLz2Fl65eegq6Wijs+eU\/k\/\/0\/vUlWQteegovXb30FHRd6sHwD68b\/ROn9JqhzVrw0lN46eqlp6DrcvPh\/\/m8\/8\/GLxo+vurSiy8GWQteegovXb30FHQ1kQ2\/7DHyvcW051iStaDtUsta0fapZS1ou9SyVrR9alkr2j61zM7t8Ms\/Xni6yNOn33M8VmV5eSteegrWdHbdBF0tuxa+8AMQAcMPBMXwA0Ex\/EBQDD8QFMMPBMXwA0G5Gv6\/\/vkOwAjDDwTF8ANBMfxAUAw\/ENR6+OWooNufEE7X5PfEw2+JtVl2zcJQ+mIvdTuHaZXdxOp0K3UHx\/osu2bKS1cvPQVdzcw++YfDAzb0vDExlZaF2D49G\/+WhcoWRZu14qWrl56CrjbuvfbLzxDld8NyfND9nw9qMzvr4mfpaGcrHV0dp\/1uL51nN6TPWvHS1UtPQVcLhT2\/9kyxWmZjXl4WRRYnv7Y0a8VLVy89BV2XejD8wyt8\/yleenXXZlby4sNrUf9kLL0OabNWvHT10lPQdbn58MtpIZozxWqZobviV4f9ooxfiJwfdGn\/IrspbdaKl65eegq6msiGX\/bt+X592scvyWyNpWUvlO+Bpr3RkqwVbZ9a1oK2Sy1rRdunlrWi7VPL7NwOvwys5kyxWmb\/xd+4CIWnoDwl+73RtirLF9mSl66sadSuhS\/8NlfpBgDoMPxAUAw\/EBTDDwTF8ANBMfxAUAw\/EJSr4f\/3v78BGGH4gaAYfiAohh8Iaj382qO6all2zcJQevU6dbsn6Tq7ievPT1P3\/ps+y66Z8tLVS09BVzOzT\/7hN\/kbfIzXVFoW4tnny\/FvWahsUbRZK166eukp6Grj3mv\/9HPc3z2qq5bZWRe\/TJ92n6ZPN9\/Sm+51+pHdkD5rxUtXLz0FXS0U9vzao7pqmY15eVkUWZz82tKsFS9dvfQUdF3qwfAPr\/D9p3jp1V2bWcmLD69F\/ZOx9DqkzVrx0tVLT0HX5ebDrz2qq5YZuit+c9IvyviFyI\/3XXqzym5Km7XipauXnoKuJrLhl337r47j0ma2xtKyF8r3QNPeaEnWirZPLWtB26WWtaLtU8ta0fapZXZuh18GVnNUVy2z\/+JvXITCU1Cekv3e6JkqyxfZkpeurGnUroUv\/DZX6QYA6DD8QFAMPxAUww8ExfADQTH8QFAMPxCUq+EvnUMGQIfhB4Ji+IGgGH4gKIYfCGo9\/Npz+mpZds3CUPpiL3U7h2mV3cTqdCt1B8f6LLtmyktXLz0FXc3MPvmHAzk2+Ay\/qbQsxPbp2fi3LFS2KNqsFS9dvfQUdLVx77V\/+i3+757TV8vsrIufpaOdrXR0dZz2u710nt2QPmvFS1cvPQVdLRT2\/Npz+mqZjXl5WRRZnPza0qwVL1299BR0XerB8A+v8P2neOnVXZtZyYsPr0X9k7H0OqTNWvHS1UtPQdfl5sOvPaevlhm6K3512C\/K+IXI+UGX9i+ym9JmrXjp6qWnoKuJbPhl3\/6rs\/i0ma2xtOyF8j3QtDdakrWi7VPLWtB2qWWtaPvUsla0fWqZndvhl4HVnNNXy+y\/+BsXofAUlKdkvzfaVmX5Ilvy0pU1jdq18IXf5irdAAAdhh8IiuEHgmL4gaAYfiAohh8IiuEHgnI1\/KVDCAHoMPxAUAw\/EBTDDwTF8ANBrYdfe05fLcuuWRhKr16nbvckXWc3cf35aeref9Nn2TVTXrp66Snoamb2yT8cyLHBZ\/hNpWUhnn2+HP+WhcoWRZu14qWrl56CrjbuvfZPv8X\/3XP6apmddfHL9Gn3afp08y296V6nH9kN6bNWvHT10lPQ1UJhz689p6+W2ZiXl0WRxcmvLc1a8dLVS09B16UeDP\/wCt9\/ipde3bWZlbz48FrUPxlLr0ParBUvXb30FHRdbj782nP6apmhu+I3J\/2ijF+I\/HjfpTer7Ka0WSteunrpKehqIht+2bf\/6iw+bWZrLC17oXwPNO2NlmStaPvUsha0XWpZK9o+tawVbZ9aZud2+GVgNef01TL7L\/7GRSg8BeUp2e+NnqmyfJEteenKmkbtWvjCb3OVbgCADsMPBMXwA0Ex\/EBQDD8QFMMPBMXwA0G5Gv7SIYQAdBh+ICiGHwiK4QeCWg+\/9qiuWpZdszCUvthL3c5hWmU3sTrdSt3BsT7Lrpny0tVLT0FXM7NP\/uE3+Rt8jNdUWhZi+\/Rs\/FsWKlsUbdaKl65eegq62rj32j\/9HPd3j+qqZXbWxc\/S0c5WOro6TvvdXjrPbkifteKlq5eegq4WCnt+7VFdtczGvLwsiixOfm1p1oqXrl56Crou9WD4h1f4\/lO89OquzazkxYfXov7JWHod0mateOnqpaeg63Lz4dce1VXLDN0VvzrsF2X8QuT8oEv7F9lNabNWvHT10lPQ1UQ2\/LJv\/9VxXNrM1lha9kL5HmjaGy3JWtH2qWUtaLvUsla0fWpZK9o+tczO7fDLwGqO6qpl9l\/8jYtQeArKU7LfG22rsnyRLXnpyppG7Vr4wm9zlW4AgA7DDwTF8ANBMfxAUAw\/EBTDDwTF8AMhfU\/\/A2NymbYVEK8aAAAAAElFTkSuQmCC"
    }
  }
}


public static GetTableStylePreviewResult GetTabTableStylePreview(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTabTableStylePreview()
    {
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey },
        tArg = new TabTableStyle()
        {
            Name = string.Empty,
            PredefinedStyle = TabTablePredefinedStyle.DarkGreen, // Предопределённый стиль, на базе которого будут строиться новый стиль
            ChangedElement = TabTableStyleElement.FirstRow // Элемент стиля, для которого будет получено изображение
        }
    };
    // Получение изображений предварительного просмотра для стиля таблицы и элемента стиля таблицы
    var result = somClient.GetTabTableStylePreview(tGet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
