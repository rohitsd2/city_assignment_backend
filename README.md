# ATS_Company
##########################################

# To create model :
- node_modules/.bin/sequelize model:create --name bss_company_info --attributes "comp_code:integer,comp_name:string,comp_phone:string,contact_person_name:string,comp_name:string,contact_person_phone:string,comp_address:string,alt_contact_person:string,alt_contact_phone:string,alt_contact_email:string,pan_tan:string,comp_reg_code:string,service_tax:string,mou_signed:integer,comp_status:string,comp_website:string,effective_date:date,expiration_date:date,created_at:date,updated_at:date"

# To create database table from migrations use :
- node_modules/.bin/sequelize db:migrate


node_modules/.bin/sequelize model:create --name user_login --attributes "id:integer,user_name:string,password:string,status:string,effective_date:date,expiration_date:date"


node_modules/.bin/sequelize model:create --name vendor --attributes "vendor_id:integer,vendor_name:string,vendor_address:string,vendor_pan:string,vendor_phone:string"


node_modules/.bin/sequelize model:create --name category --attributes "category_name:string,user_id:integer,status:string"

node_modules/.bin/sequelize model:create --name category --attributes "item_name:string,category_id:integer,price:integer,user_id:integer;

node_modules/.bin/sequelize model:create --name measurement --attributes "category_id:integer,measurement_name:string,user_id:integer;


node_modules/.bin/sequelize model:create --name item_measurement --attributes "item_id:integer,
measurement_id:integer,user_id:integer;


node_modules/.bin/sequelize model:create --name vendor_category_mapping --attributes "category_id:integer,vendor_id:integer;

vendor register -D
login - D
update password -D
category add -D
get all category -D
add item request - D
get items by selected category -D
get all items - D
add measurement request
get all measurements by item code
get vendor profile
update vendor profile
add add-hoc request
get all request for selected vendor
accept request


customer - user type - 2
vendor - user type -1
