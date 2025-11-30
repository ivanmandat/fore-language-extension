# GetTabPredefinedStyles: Операция

GetTabPredefinedStyles: Операция
-


**


# GetTabPredefinedStyles


## Синтаксис


TabStylesXmls GetTabPredefinedStyles(TabSheetId
 tTabSheet)


## Параметры


tTabSheet. Моникёр
 таблицы.


## Описание


Операция GetTabPredefinedStyles
 получает предопределённые стили таблицы.


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


Результатом выполнения операции будет коллекция предопределённых стилей,
 доступных для использования в таблице.


## Пример


Ниже приведён пример получения предопределённых стилей таблицы. В запросе
 передаётся моникёр таблицы. В ответе возвращается полученный список стилей.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabPredefinedStyles xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>EOLNKADPMKABGOAEFBAOOCHJHNKIEKIEEIPICMCBNHCECJLN!M!S!PPPDNAHDPMKABGOAEFILLPNILKGPMBMKEFJEANDNKLMCIIKHN!Sheets!1</id>  </tTabSheet>
  </GetTabPredefinedStyles>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabPredefinedStylesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFFFFF**" />
  <Font F="**Arial**" S="**10**" C="**#48494C**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#D6F4DE**" />
  <Font F="**Arial**" S="**10**" C="**#1F7736**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFD8D6**" />
  <Font F="**Arial**" S="**10**" C="**#FF3B31**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFEB99**" />
  <Font F="**Arial**" S="**10**" C="**#48494C**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFFFFF**" />
  <Font F="**Arial**" S="**10**" C="**#48494C**" A="**0**" TR="**0**" I="**true**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFF5CC**" />
  <Font F="**Arial**" S="**10**" C="**#48494C**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFFFFF**" />
  <Font F="**Arial**" S="**10**" C="**#FF3B31**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFDFB3**" />
  <Font F="**Arial**" S="**10**" C="**#B36801**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#F2F2F2**" />
  <Font F="**Arial**" S="**10**" C="**#48494C**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#F2F2F2**" />
  <Font F="**Arial**" S="**10**" C="**#468EF0**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#6D6E73**" />
  <Font F="**Arial**" S="**10**" C="**#FFFFFF**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
[![](../../../minus.gif)](../../../#)<Item B="****" UNS="**2**">
  <Text HA="**0**" VA="**1**" WW="**0**" Mmm="**0.70 0.70 0.70 0.70**" />
  <NumberFormat F="****" FT="**0**" />
  <Fill C="**#FFFFFF**" />
  <Font F="**Arial**" S="**10**" C="**#F99501**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**15**" />
  <DefaultFont F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" C="**1**" HA="**0**" VA="**0**" TOPH="**false**" TOPV="**true**" EPE="**false**" FH="**false**" FV="**false**" AS="**false**" />
  <Hyperlink E="**false**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </Item>
  </GetTabPredefinedStylesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabPredefinedStyles" :
  {
   "tTabSheet" :
    {
     "id" : "EOLNKADPMKABGOAEFBAOOCHJHNKIEKIEEIPICMCBNHCECJLN!M!S!PPPDNAHDPMKABGOAEFILLPNILKGPMBMKEFJEANDNKLMCIIKHN!Sheets!1"
    }
  }
}

### JSON-ответ:


{
 "GetTabPredefinedStylesResult" :
  {
   "Item" :
    [
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFFFFF"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#48494C",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#D6F4DE"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#1F7736",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFD8D6"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#FF3B31",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFEB99"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#48494C",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFFFFF"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#48494C",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "true"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFF5CC"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#48494C",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFFFFF"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#FF3B31",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFDFB3"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#B36801",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#F2F2F2"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#48494C",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#F2F2F2"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#468EF0",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#6D6E73"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#FFFFFF",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      },
      {
       "@B" : "",
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "1",
         "@Mmm" : "0.70 0.70 0.70 0.70",
         "@HA" : "0",
         "@WW" : "0"
        },
       "NumberFormat" :
        {
         "@F" : "",
         "@FT" : "0"
        },
       "Fill" :
        {
         "@C" : "#FFFFFF"
        },
       "Font" :
        {
         "@A" : "0",
         "@B" : "false",
         "@SO" : "false",
         "@S" : "10",
         "@C" : "#F99501",
         "@U" : "false",
         "@F" : "Arial",
         "@TR" : "0",
         "@H" : "15",
         "@I" : "false"
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
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "0"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "1"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "2"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "3"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "4"
            },
            {
             "@S" : "7",
             "@C" : "#000000",
             "@W" : "2",
             "@I" : "5"
            },
            {
             "@S" : "7",
             "@I" : "6"
            },
            {
             "@S" : "7",
             "@I" : "7"
            }
          ]
        },
       "PictureData" :
        {
         "@C" : "1",
         "@AS" : "false",
         "@E" : "false",
         "@VA" : "0",
         "@HA" : "0",
         "@TOPV" : "true",
         "@EPE" : "false",
         "@TOPH" : "false",
         "@FV" : "false",
         "@FH" : "false"
        },
       "Hyperlink" :
        {
         "@E" : "false"
        },
       "Other" :
        {
         "@P" : "1",
         "@H" : "",
         "@DEA" : "",
         "@L" : "0",
         "@FH" : "0",
         "@DZA" : ""
        }
      }
    ]
  }
}


public static TabStylesXmls GetTabPredefinedStyles(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCopy = new GetTabPredefinedStyles()
    {
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Получение всех предопределённых стилей
    var result = somClient.GetTabPredefinedStyles(tCopy);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
